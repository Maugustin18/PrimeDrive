import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

export async function rememberCheckboxPersistence(auth, rememberCheckbox) {
    const persistence = rememberCheckbox ? 
        browserLocalPersistence 
        : 
        browserSessionPersistence;
    await setPersistence(auth, persistence);
}