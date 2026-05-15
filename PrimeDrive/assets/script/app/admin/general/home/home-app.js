import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getCar, getCarPhotos } from "../../data/car/view-car-app.js";
import { viewClient } from "../../data/clients/view-client-app.js";

const db = getFirestore();

export async function getCarsWithOrderCounts() {
    const carsSnapshot = await getDocs(collection(db, "cars"));
    const carsRaw = carsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const reservationCounts = await Promise.all(
        carsRaw.map(async car => {
            const q = query(collection(db, "reservations"), where("carId", "==", car.id));
            const resSnap = await getDocs(q);
            return resSnap.size;
        })
    );

    const modelSnaps = await Promise.all(
        carsRaw.map(car => getDoc(doc(db, "models", car.model)))
    );

    const brandSnaps = await Promise.all(
        modelSnaps.map(modelSnap => {
            if (!modelSnap.exists()) return null;
            return getDoc(doc(db, "brands", modelSnap.data().brand));
        })
    );

    const cars = [];

    for (let i = 0; i < carsRaw.length; i++) {
        const modelSnap = modelSnaps[i];
        const brandSnap = brandSnaps[i];

        if (modelSnap?.exists() && brandSnap?.exists()) {
            cars.push({
                ...carsRaw[i],
                model: modelSnap.data(),
                brand: brandSnap.data(),
                orderCount: reservationCounts[i]
            });
        }
    }

    return cars;
}

// CAR OF THE WEEK
export async function getMostOrderedCarThisWeek() {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const snapshot = await getDocs(collection(db, "reservations"));
    const carCounts = snapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        const createdAt = data.dateCreated.toDate ? data.dateCreated.toDate() : new Date(data.dateCreated);
        if (createdAt >= startOfWeek && createdAt <= endOfWeek) {
            acc[data.carId] = (acc[data.carId] || 0) + 1;
        }
        return acc;
    }, {});

    const sorted = Object.entries(carCounts).sort((a, b) => b[1] - a[1]);
    if (!sorted.length) return null;

    const topCarId = sorted[0][0];
    const [photoList, carInfo] = await Promise.all([
        getCarPhotos(topCarId),
        getCar(topCarId)
    ]);

    return { carId: topCarId, count: sorted[0][1], carPhoto: photoList[0].publicUrl, ...carInfo };
}

// CAR OF THE MONTH
export async function getMostOrderedCarThisMonth() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);

    const snapshot = await getDocs(collection(db, "reservations"));
    const carCounts = snapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        const createdAt = data.dateCreated.toDate ? data.dateCreated.toDate() : new Date(data.dateCreated);
        if (createdAt >= startOfMonth && createdAt <= endOfMonth) {
            acc[data.carId] = (acc[data.carId] || 0) + 1;
        }
        return acc;
    }, {});

    const sorted = Object.entries(carCounts).sort((a, b) => b[1] - a[1]);
    if (!sorted.length) return null;

    const topCarId = sorted[0][0];
    const [photoList, carInfo] = await Promise.all([
        getCarPhotos(topCarId),
        getCar(topCarId)
    ]);

    return { carId: topCarId, count: sorted[0][1], carPhoto: photoList[0].publicUrl, ...carInfo };
}



// THIS MONTH GRAPH DATA
export async function getReservationsThisMonth() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const snapshot = await getDocs(collection(db, "reservations"));
    const dailyCount = snapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        const createdAt = data.dateCreated.toDate ? data.dateCreated.toDate() : new Date(data.dateCreated);
        if (createdAt.getMonth() === currentMonth && createdAt.getFullYear() === currentYear) {
            const day = createdAt.getDate();
            acc[day] = (acc[day] || 0) + 1;
        }
        return acc;
    }, {});

    return dailyCount;
}



// PENDING RESERVATIONS DATA
export async function getPendingReservations() {
    try {
        const q = query(collection(db, "reservations"), where("status", "==", "1"));
        const snapshot = await getDocs(q);

        return await Promise.all(snapshot.docs.map(async doc => {
            const data = doc.data();
            const [carData, clientData] = await Promise.all([
                getCar(data.carId),
                viewClient(data.clientId)
            ]);
            return { id: doc.id, ...data, car: carData, client: clientData };
        }));
    } catch (err) {
        console.log(err);
        return [];
    }
}



// RESERVATIONS BEGGINNING IN LESS THAN 24 H
export async function getReservationsStartingInNext24h() {
    try {
        const now = new Date();
        const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

        const q = query(
            collection(db, "reservations"),
            where("pickupDate", ">=", now.toISOString()),
            where("pickupDate", "<=", in24h.toISOString()),
            where("status", "==", "2")
        );

        const snapshot = await getDocs(q);

        return await Promise.all(snapshot.docs.map(async doc => {
            const data = doc.data();
            const [carData, clientData] = await Promise.all([
                getCar(data.carId),
                viewClient(data.clientId)
            ]);
            return { id: doc.id, ...data, car: carData, client: clientData };
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
}


// TODAYS RETURNS DATA
export async function getReservationsEndingToday() {
    try {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

        const q = query(
            collection(db, "reservations"),
            where("dropoffDate", ">=", startOfDay.toISOString()),
            where("dropoffDate", "<=", endOfDay.toISOString()),
            where("status", "==", "5")
        );

        const snapshot = await getDocs(q);

        return await Promise.all(snapshot.docs.map(async doc => {
            const data = doc.data();
            const [carData, clientData] = await Promise.all([
                getCar(data.carId),
                viewClient(data.clientId)
            ]);
            return { id: doc.id, ...data, car: carData, client: clientData };
        }));
    } catch (err) {
        console.error(err);
        return [];
    }
}



// CLIENTS NUMBER
export async function getClientsCount() {
    try {
        const clientsRef = collection(db, "clients");
        const querySnapshot = await getDocs(clientsRef);
        return querySnapshot.size;
    } catch (err) {
        console.error("Error getting clients count:", err);
        return 0;
    }
}

// USERS NUMBER
export async function getUsersCount() {
    try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);
        return querySnapshot.size;
    } catch (err) {
        console.error("Error getting users count:", err);
        return 0;
    }
}
