import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { viewClient } from "../../data/clients/view-client-app.js";


const db = getFirestore();

function formatMonth(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}

function addMonths(date, count) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + count);
    return newDate;
}

export async function getOrdersPerMonth() {
    try {
        const reservationsRef = collection(db, "reservations");
        const snapshot = await getDocs(reservationsRef);

        if (snapshot.empty) return { labels: [], counts: [] };

        const allDates = [];
        const ordersByMonth = {};

        

        snapshot.forEach(doc => {
            const data = doc.data();
            const date = new Date(data.dateCreated);
            allDates.push(date);

            const monthKey = formatMonth(date);
            ordersByMonth[monthKey] = (ordersByMonth[monthKey] || 0) + 1;
        });

        const minDate = new Date(Math.min(...allDates));
        const maxDate = new Date(Math.max(...allDates));

        const labels = [];
        const counts = [];

        let current = new Date(minDate.getFullYear(), minDate.getMonth());

        while (current <= maxDate) {
            const key = formatMonth(current);
            labels.push(key);
            counts.push(ordersByMonth[key] || 0);
            current = addMonths(current, 1);
        }

        return { labels, counts };
    } catch (err) {
        console.log(err);
        return { labels: [], counts: [] };
    }
}


// BOOKING CANCELLATIONS
export async function getCancellations() {
    try {
        const reservationsRef = collection(db, "reservations");
        const q = query(reservationsRef, where("status", "==", "6"));
        const querySnapshot = await getDocs(q);

        const reservations = [];
        querySnapshot.forEach((doc) => {
        reservations.push({
            id: doc.id,
            ...doc.data()
        });
        });

        return reservations;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export async function getCancellationsPerMonth() {
    try {
        const reservationsRef = collection(db, "reservations");
        const q = query(reservationsRef, where("status", "==", "6"));
        const snapshot = await getDocs(q);

        if (snapshot.empty) return { labels: [], counts: [] };

        const allDates = [];
        const cancellationsByMonth = {};

        snapshot.forEach(doc => {
        const data = doc.data();
        const date = new Date(data.dateCreated); // assumes cancellations have `timeCreated` for when they were made
        allDates.push(date);

        const monthKey = formatMonth(date);
        cancellationsByMonth[monthKey] = (cancellationsByMonth[monthKey] || 0) + 1;
        });

        const minDate = new Date(Math.min(...allDates));
        const maxDate = new Date(Math.max(...allDates));

        const labels = [];
        const counts = [];

        let current = new Date(minDate.getFullYear(), minDate.getMonth());

        while (current <= maxDate) {
        const key = formatMonth(current);
        labels.push(key);
        counts.push(cancellationsByMonth[key] || 0);
        current = addMonths(current, 1);
        }

        return { labels, counts };
    } catch (err) {
        console.log( err);
        return { labels: [], counts: [] };
    }
}

// TOP PLATFORMS
export function getTopPlatforms(){
    return [
        { name: "Windows", count: 1200 },
        { name: "iOS", count: 860 },
        { name: "Android", count: 600 },
        { name: "Linux", count: 100 }
    ];
}

// NEW USERS DATA
export async function getUsersCreatedThisMonth() {
    const usersRef = collection(db, "users");

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const startTimestamp = Timestamp.fromDate(startOfMonth);
    const endTimestamp = Timestamp.fromDate(startOfNextMonth);

    const q = query(
        usersRef,
        where("timeCreated", ">=", startTimestamp),
        where("timeCreated", "<", endTimestamp)
    );

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    } catch (err) {
        console.log(err);
        return 'error';
    }
}

// REPEAT CLIENTS 
export async function countClientsWithMultipleReservations() {
    const reservationsRef = collection(db, "reservations");

    try {
        const snapshot = await getDocs(reservationsRef);

    const clientCounts = {};

    snapshot.forEach(doc => {
        const data = doc.data();
        const clientId = data.clientId;
        if (clientId) {
            clientCounts[clientId] = (clientCounts[clientId] || 0) + 1;
        }
    });

    const clientsWithMultiple = Object.values(clientCounts).filter(count => count > 1).length;

        return clientsWithMultiple;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

// USERS GRAPH DATA
export async function getMonthlyUserSignupCounts() {
  const usersRef = collection(db, "users");

  try {
    const snapshot = await getDocs(usersRef);
    const monthlyCounts = {};

    snapshot.forEach(doc => {
        const data = doc.data();
        const timeCreated = data.timeCreated;
        const date = timeCreated.toDate ? timeCreated.toDate() : new Date(timeCreated);
        // console.log(timeCreated);
        // console.log(date)
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        monthlyCounts[yearMonth] = (monthlyCounts[yearMonth] || 0) + 1;
    });

    const sorted = Object.keys(monthlyCounts)
        .sort()
        .map(key => ({ month: key, count: monthlyCounts[key] }));

    sorted.forEach((e)=>{
        console.log(e.month)
    })
    return sorted;
  } catch (err) {
        console.log(err);
        return [];
  }
}

// CLIENTS GRAPH DATA
export async function getMonthlyClientSignupCounts() {
  const db = getFirestore();
  const clientsRef = collection(db, "clients");

  try {
    const snapshot = await getDocs(clientsRef);
    const monthlyCounts = {};

    snapshot.forEach(doc => {
      const data = doc.data();
      const createdAt = data.timeCreated;
      if (createdAt) {
        const date = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        monthlyCounts[yearMonth] = (monthlyCounts[yearMonth] || 0) + 1;
      }
    });

    const sorted = Object.keys(monthlyCounts)
      .sort()
      .map(key => ({
        month: key,
        count: monthlyCounts[key]
      }));

    sorted.forEach((e)=>{
        console.log(e.month)
    })

    return sorted;
  } catch (err) {
    console.log(err);
    return [];
  }
}


// TOP CLIENTS DATA
export async function getTopClientsByPayment(limit = 10) {
  const db = getFirestore();
  const reservationsRef = collection(db, "reservations");

  try {
    const snapshot = await getDocs(reservationsRef);
    const clientStats = {};

    snapshot.forEach(doc => {
      const data = doc.data();
      const clientId = data.clientId;
      const payment = parseFloat(data.price) || 0;

      if (!clientStats[clientId]) {
        clientStats[clientId] = {
          clientId: clientId,
          totalPayment: 0,
          reservationCount: 0
        };
      }

      clientStats[clientId].totalPayment += payment;
      clientStats[clientId].reservationCount += 1;
    });

    const sortedClients = Object.values(clientStats).sort(
      (a, b) => b.totalPayment - a.totalPayment
    );

    const enrichedClients = await Promise.all(
      sortedClients.slice(0, limit).map(async (client) => {
        const clientInfo = await viewClient(client.clientId);
        return {
          ...client,
          clientInfo
        };
      })
    );

    return enrichedClients.slice(0, limit);
  } catch (err) {
    console.log(err)
    return [];
  }
}