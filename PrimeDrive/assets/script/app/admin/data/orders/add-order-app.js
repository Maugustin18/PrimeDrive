import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();

export async function addOrder(orderData) {
    try {
        const docRef = await addDoc(collection(db, "reservations"), orderData);
        console.log(docRef.id);
        return docRef.id;
    } catch (err) {
        console.log(err);
    }
}

export async function checkAvailability(carId, pickupDateTime, dropoffDateTime, orderId = null) {
  try {
    const bookingsRef = collection(db, "reservations");
    const q = query(bookingsRef, where("carId", "==", carId));
    const snapshot = await getDocs(q);

    let isAvailable = true;

    snapshot.forEach(doc => {
        const booking = doc.data();
        // console.log("Doc ID:", doc.id, "Order ID:", orderId);

        if(doc.id != orderId){
            if(booking.status != '3' && booking.status != '4') {
                const dbPickup = (new Date(booking.pickupDate)).getTime();
                const dbDropoff = (new Date(booking.dropoffDate)).getTime();

                // console.log(`Checking availability for car ${carId}`);
                // console.log(`Pickup: ${new Date(dbPickup).toLocaleString()}, Dropoff: ${new Date(dbDropoff).toLocaleString()}`);

                if (
                    (pickupDateTime >= dbPickup && pickupDateTime < dbDropoff) ||
                    (dropoffDateTime > dbPickup && dropoffDateTime <= dbDropoff) ||
                    (pickupDateTime <= dbPickup && dropoffDateTime >= dbDropoff)
                ) {
                    console.log("Car is taken");
                    isAvailable = false;
                }
                console.log(doc.id)
            }
        }
       
        
    });

        return isAvailable;
    } catch (err) {
        console.log(err);
        throw err;
    }
}