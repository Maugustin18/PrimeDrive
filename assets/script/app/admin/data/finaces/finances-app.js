import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();

export async function getAllOrders() {
    const snapshot = await getDocs(collection(db, "reservations"));

    const orders = await Promise.all(snapshot.docs.map(async (docSnap) => {
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    }));

    return orders;
}

// REVENUE GRAPH DATA
export async function getDailyRevenue() {
    const snapshot = await getDocs(collection(db, "reservations"));

    const revenueMap = new Map();

    snapshot.docs.forEach(docSnap => {
        const data = docSnap.data();

        const price = parseFloat(data.price || 0);
        if (isNaN(price)) return;
        const createdAt = data.dateCreated?.toDate
            ? data.dateCreated.toDate()
            : new Date(data.dateCreated);

        const dateKey = createdAt.toISOString().split("T")[0];

        if (!revenueMap.has(dateKey)) {
            revenueMap.set(dateKey, 0);
        }

        revenueMap.set(dateKey, revenueMap.get(dateKey) + price);
    });

    return {
        labels: Array.from(revenueMap.keys()),
        data: Array.from(revenueMap.values())
    };
}

// ALL TIME GRAPH DATA
export async function getReservationsGroupedByDay() {
    const snapshot = await getDocs(collection(db, "reservations"));
    const dayMap = new Map();

    snapshot.docs.forEach(docSnap => {
        const data = docSnap.data();

    
        const createdAt = data.dateCreated?.toDate
            ? data.dateCreated.toDate()
            : new Date(data.dateCreated);

        const dayKey = createdAt.toISOString().split("T")[0];

        dayMap.set(dayKey, (dayMap.get(dayKey) || 0) + 1);
    });

    return Object.fromEntries(dayMap.entries());
}

// TOP CARS DATA
export async function getTopCars() {
    const snapshot = await getDocs(collection(db, "reservations"));

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const revenueMap = new Map();

    snapshot.forEach(doc => {
        const data = doc.data();
        const carId = data.carId?.trim();
        const price = parseFloat(data.price);

        if (!carId || isNaN(price)) return;

        if (!revenueMap.has(carId)) {
            revenueMap.set(carId, {
                allTimeRevenue: 0,
                thisMonthRevenue: 0
            });
        }

        const pickUpDate = data.pickupDate?.toDate
            ? data.pickupDate.toDate()
            : new Date(data.pickupDate);

        const isThisMonth = (
            pickUpDate.getMonth() === currentMonth &&
            pickUpDate.getFullYear() === currentYear
        );

        const carRevenue = revenueMap.get(carId);
        carRevenue.allTimeRevenue += price;
        if (isThisMonth) carRevenue.thisMonthRevenue += price;
        revenueMap.set(carId, carRevenue);
    });

    const topCarsSorted = Array.from(revenueMap.entries())
        .sort((a, b) => b[1].allTimeRevenue - a[1].allTimeRevenue)
        .slice(0, 5);

    const carDocs = await Promise.all(
        topCarsSorted.map(([carId]) => getDoc(doc(db, "cars", carId)))
    );

    const modelDocs = await Promise.all(
        carDocs.map(carSnap => {
            if (!carSnap.exists()) return null;
            const modelId = carSnap.data().model;
            return getDoc(doc(db, "models", modelId));
        })
    );

    const brandDocs = await Promise.all(
        modelDocs.map(modelSnap => {
            if (!modelSnap?.exists()) return null;
            const brandId = modelSnap.data().brand;
            return getDoc(doc(db, "brands", brandId));
        })
    );

    const topCars = [];

    for (let i = 0; i < topCarsSorted.length; i++) {
        const [carId, revenue] = topCarsSorted[i];
        const carSnap = carDocs[i];
        const modelSnap = modelDocs[i];
        const brandSnap = brandDocs[i];

        if (carSnap?.exists() && modelSnap?.exists() && brandSnap?.exists()) {
            topCars.push({
                id: carId,
                ...carSnap.data(),
                ...revenue,
                model: modelSnap.data(),
                brand: brandSnap.data()
            });
        }
    }

    return topCars;
}