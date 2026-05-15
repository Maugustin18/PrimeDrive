import { getUserData } from "./userData-app.js";

export async function checkIfAdmin(){
    try {
        const user = await getUserData();
        const {role} = user;
        if(role === 1) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err)
        return false;
    } 
}