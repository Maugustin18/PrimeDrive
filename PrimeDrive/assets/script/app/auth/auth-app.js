import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";
import { closeAuthSession } from "./sessionManager-app.js";

// closeAuthSession()