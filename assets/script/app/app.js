import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import * as supabase from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const firebaseConfig = {
    apiKey: "AIzaSyB8NJ-9geQfRrJxBszLVk-XAQYojZQFzY0",
    authDomain: "primedrive-md.firebaseapp.com",
    databaseURL: "https://primedrive-md-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "primedrive-md",
    storageBucket: "primedrive-md.firebasestorage.app",
    messagingSenderId: "137758687663",
    appId: "1:137758687663:web:30e53c3d8922c4d76eef5a",
    measurementId: "G-TYG9RNF3ET"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getDatabase();
export const auth = getAuth(app);



const SUPABASE_URL = 'https://bwidehzltapvmubhedpe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3aWRlaHpsdGFwdm11YmhlZHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzg5MDAsImV4cCI6MjA2Mzc1NDkwMH0.pA8JuJIpIJ3euD25qEmsygUgTumdZ2y9jXPNHy-ya7c';

export const supabaseApp = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



//Add information
// function writeCarsData(carId, modelId, rating, airCond){
//     const carsRef = ref(db, 'cars/' + carId);
//     const cars = get(carsRef);
//     console.log(cars);

//     set(carsRef, {
//         modelId: modelId,
//         rating: rating,
//         airCond: airCond,
//     });
// }
// writeCarsData(2, 3, 4, false);


//Read information (object)
// const carId = 1;
// const carGot = ref(db, `cars/${carId}/rating`);
// onValue(carGot, (snapshot)=>{
//     const data = snapshot.val();
//     console.log(data);
// });


//Push an object to a list
// const reviewId = 2;
// const reviewListRef = ref(db, `reviews/`);
// const newReviewRef = push(reviewListRef);
// set(newReviewRef, {
//     carId: 1,
//     clientId: 1,
//     content: 'lorem ipsum asdsd',
//     rating: 5,
// });



//Read a list
//When a child is added
// const reviewListRef = ref(db, `reviews/`);
// onChildAdded(reviewListRef, (data)=>{
//     console.log(data.val());
//     // console.log(index);
// });

// //When a child is changed
// onChildChanged(reviewListRef, (data)=>{
//     console.log(data.val());
//     // console.log(index);
// });

// //When a child is removed
// onChildRemoved(reviewListRef, (data)=>{
//     console.log(data.val());
//     // console.log(index);
// });