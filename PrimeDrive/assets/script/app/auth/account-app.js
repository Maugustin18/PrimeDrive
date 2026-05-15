import { onAuthStateChanged, signOut, updateProfile, updateEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";
import { checkReAuthSession } from "./sessionManager-app.js";

const db = getFirestore();

const loggedInUserId = localStorage.getItem('loggedInUserId');

export async function preventAccess(){
    onAuthStateChanged(auth, (user)=>{
        if(user && loggedInUserId){
            const docRef = doc(db, "users", user.uid);
            getDoc(docRef)
            .then((docSnap)=>{
                if(docSnap.exists()){
                    const userData = docSnap.data();
                    if(window.location.pathname.includes('admin')){
                        if(userData.role != 1){
                            console.log('User is not admin');
                            window.location.href = `${setURLPath()}./pages/user/login.html`;
                        } else {
                            console.log('Welcome admin')
                        }
                    }
                } else {
                    console.log('No document found matching id');
                }
            })
            .catch((err)=>{
                console.log('Err getting document');
            })
        } else {
            console.log('User id  Not found in Local Storage');
            window.location.href = `${setURLPath()}./pages/user/login.html`;
        }
    });
}


export async function getUserData(){
    return new Promise((resolve, reject)=>{
        onAuthStateChanged(auth, async (user)=>{
            if (user) {
                const {uid} = user;
                try {
                    const docRef = doc(db, "users", uid);
                    const docSnap = await getDoc(docRef);

                    if (!docSnap.exists()) {
                        reject('No document found matching id');
                    } else {
                        resolve({id: docSnap.id, ...docSnap.data()});
                    }
                } catch (err) {
                    reject(err);
                }
            } else {
                reject('No user found');
                return;
            }
        });
    });
}

// CHANGE PROFILE PICTURE
export async function changeProfilePicture(url) {
    try {
      await updateProfile(auth.currentUser, { photoURL: url });
      await changeFirestoreProfilePicture(auth.currentUser.uid, url);
      console.log('Changed');
    //   window.location.reload();
    } catch (err) {
      console.log(err);
    }
}

async function changeFirestoreProfilePicture(uid, url) {
    const userDoc = doc(db, "users", uid);
    await updateDoc(userDoc, {
      photo: url,
    });
}

// CHANGE PROFILE DATA
export async function changeProfileData(newFName, newLName, newEmail, newPhone) {
    try {
        const userData = getUserData();
        const {email, fName, lName, phone} = userData;
        const {uid} = auth.currentUser;
        const userDoc = doc(db, "users", uid);

        if(newEmail || newPhone){
            console.log('re-auth required');
            
            const isReAuth = localStorage.getItem('reAuth');
            const isSessionAvailable = checkReAuthSession();
            if(isReAuth && isSessionAvailable) {
                if(newEmail) {
                    updateEmail(auth.currentUser, newEmail).then(async () => {
                        await updateDoc(userDoc, {
                            email: newEmail,
                        });
                        addAlert('FM-E-0004');
                        window.location.reload();
                    }).catch((err) => {
                        console.log(err);
                        const errorCode = err.code;
                        if(errorCode==='auth/requires-recent-login'){
                            window.location.href = `${setURLPath()}pages/user/login.html?re-auth=true&redirect=account&q={"tab":"profile"}`;
                        }
                        addAlert('FM-E-0003');
                    });
                }
                if(newPhone) {
                    try{
                        await updateDoc(userDoc, {
                            phone: newPhone,
                        });
                        addAlert('US-S-0006');
                        window.location.reload();
                    } catch(err){
                        console.log(err);
                        addAlert('US-S-0005');
                    };
                }
            } else {
                console.log('Please re-authenticate');
                window.location.href = `${setURLPath()}pages/user/login.html?re-auth=true&redirect=account&q={"tab":"profile"}`;
            }

        }
        console.log('no re-auth required');
        if(newFName && newLName) {
            updateProfile(auth.currentUser, {
                displayName: `${newFName} ${newLName}`,
            }).then(() => {
                console.log('newFName and newLName set');
            }).catch((err) => {
                console.log(err);
            });
            await updateDoc(userDoc, {
                fName: newFName,
                lName: newLName,
            });
            window.location.reload();
        } else if(newFName){
            updateProfile(auth.currentUser, {
                displayName: `${newFName} ${lName}`,
            }).then(() => {
                console.log('newFName set');
            }).catch((err) => {
                console.log(err);
            });
            await updateDoc(userDoc, {
                fName: newFName,
            });
            window.location.reload();
        } else if(newLName){
            updateProfile(auth.currentUser, {
                displayName: `${fName} ${newLName}`,
            }).then(() => {
                console.log('newLName set');
            }).catch((err) => {
                console.log(err);
            });
            await updateDoc(userDoc, {
                lName: newLName,
            });
            window.location.reload();
        } else {
            console.log('No name to set');
        }
    } catch (err) {
        console.log(err);
    }
}


// CHANGE PASSWORD
export async function changePassword(currentPassword, newPassword, confirmNewPassword) {
    const user = auth.currentUser;

    try{
        if(currentPassword!='' && newPassword!='' && confirmNewPassword!=''){
            if(newPassword === confirmNewPassword) {
                const isReAuth = localStorage.getItem('reAuth');
                const isSessionAvailable = checkReAuthSession();
                if(isReAuth && isSessionAvailable) {
                    
                    const credential = EmailAuthProvider.credential(user.email, currentPassword);
                    reauthenticateWithCredential(auth.currentUser, credential)
                    .then(()=>{
                        updatePassword(user, newPassword)
                        .then(() => {
                            addAlert('US-S-0008');
                        })
                        .catch((err) => {
                            console.log(err);
                            const errorCode = err.code;
                            if(errorCode === 'auth/password-does-not-meet-requirements'){
                                addAlert('FM-S-0007');
                            } else {
                                addAlert('US-S-0007');
                            }
                        });
                    })
                    .catch((err) => {
                        const errorCode = err.code;
                        console.log(errorCode);
                        if(errorCode==='auth/wrong-password'){
                            addAlert('FM-S-0006');
                        } else if(errorCode==='auth/too-many-requests') {
                            addAlert('AC-C-0003');
                        }
                    });
                } else {
                    console.log('Please re-authenticate');
                    window.location.href = `${setURLPath()}pages/user/login.html?re-auth=true&redirect=account&q={"tab":"security"}`;
                }
            } else {
                addAlert('FM-D-0001');
            }
        } else {
            addAlert('FM-D-0000');
        }
    } catch(err){
        console.log(err);
    }
        
}



// GET NEWSLETTER SUBSCRIPTION
export async function getNewsletterSubscription() {
    const userData = await getUserData();
    if(userData.newsletterSub != undefined){
        return userData.newsletterSub;
    } else {
        try {
            const user = await new Promise((resolve) => {
                onAuthStateChanged(auth, (user) => {
                    resolve(user);
                });
            });

            const {uid} = user;
            const newsletterCollection = await getDocs(collection(db, 'newsletterSubs'));
            const thisUserSub =  newsletterCollection.docs.find((e)=>(
                e.data().email == userData.email
            ));
            
            if(thisUserSub != undefined){
                const userDoc = doc(db, "users", uid);
                await updateDoc(userDoc, {
                    newsletterSub: true,
                });
                return true;
            } else {
                const userDoc = doc(db, "users", uid);
                await updateDoc(userDoc, {
                    newsletterSub: false,
                });
                return false;
            }
        } catch (err) {
            console.log(err)
        }
        
    }
}

// SET NEWSLETTER SUBSCRIPTION
export async function setNewsletterSubscription(checkboxValue) {
     try {
        const userData = await getUserData();
        const user = await new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                resolve(user);
            });
        });

        const {uid} = user;

        const userDoc = doc(db, "users", uid);
        await updateDoc(userDoc, {
            newsletterSub: checkboxValue,
        });

        const newsletterCollection = await getDocs(collection(db, 'newsletterSubs'));

        if(checkboxValue === true){
            addAlert('US-S-0009');
            const subRef = await addDoc(collection(db, "newsletterSubs"), {
                email: userData.email,
                timeJoined: new Date(),
            });
            console.log(subRef);
        } else {
            addAlert('US-S-0010');
            const thisUserSub =  newsletterCollection.docs.find((e)=>(
                e.data().email == userData.email
            ));
            console.log(thisUserSub.id);
            await deleteDoc(doc(db, "newsletterSubs", thisUserSub.id));

        }
    } catch (err) {
        console.log(err)
    }
}


// GET CLIENT RESERVATIONS
 export async function getClientIdByEmail(email) {
    const clientsRef = collection(db, "clients");
    const q = query(clientsRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return doc.id;
}


// CANCEL RESERVATION STATUS
export async function cancelReservation(reservationId) {
    try {
        const reservationDoc = doc(db, "reservations", reservationId);
        await updateDoc(reservationDoc, {
            status: "6",
        });
    } catch (err) {
        console.log(err);
    }
}