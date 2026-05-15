import { setURLPath } from "../../script/functions/global/URLPosition.js"

export const AlertTypes = [
    {
        key: 'info',
        icon: `<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
    },
    {
        key: 'success',
        icon: `<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>`,
    },
    {
        key: 'warning',
        icon: `<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`,
    },
    {
        key: 'danger',
        icon: `<path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`,
    },
]

export const Alerts =[
    //FORM Email
    {
        type: 'warning',
        code: 'FM-E-0000',
        content: `Email invalid`,
    },
    {
        type: 'warning',
        code: 'FM-E-0001',
        content: `Emailul există deja`,
    },
    {
        type: 'success',
        code: 'FM-E-0002',
        content: `Email adăugat cu succes`,
    },
    {
        type: 'danger',
        code: 'FM-E-0003',
        content: `Nu se poate schimba emailul`,
    },
    {
        type: 'success',
        code: 'FM-E-0004',
        content: `Email schimbat cu succes`,
    },
    //FORM Data
    {
        type: 'danger',
        code: 'FM-D-0000',
        content: `Lipsesc unele date`,
    },
    {
        type: 'danger',
        code: 'FM-D-0001',
        content: `Parolele nu coincid`,
    },
    //FORM Status
    {
        type: 'success',
        code: 'FM-S-0000',
        content: `Mesajul tău a fost trimis`,
    },
    {
        type: 'success',
        code: 'FM-S-0001',
        content: `Contul tău a fost creat`,
    },
    {
        type: 'danger',
        code: 'FM-S-0002',
        content: `Nu se poate crea contul`,
    },
    {
        type: 'warning',
        code: 'FM-S-0003',
        content: `Email sau parolă incorectă`,
    },
    {
        type: 'warning',
        code: 'FM-S-0004',
        content: `Te rugăm să fii de acord cu termenii și condițiile noastre`,
    },
    {
        type: 'warning',
        code: 'FM-S-0005',
        content: `Te rugăm să introduci parola`,
    },
    {
        type: 'warning',
        code: 'FM-S-0006',
        content: `Parolă incorectă`,
    },
    {
        type: 'warning',
        code: 'FM-S-0007',
        // UPDATE PASSWORD POLICY LINK HERE ->
        content: `Parola nu respectă cerințele. Vezi politica noastră de parole <a href="${setURLPath()}/pages/user/signup.html" target="blank" class="orange_link">aici</a>`,
        // 
    },
    {
        type: 'danger',
        code: 'FM-S-0008',
        content: `Parolă greșită`,
    },
    // CAR Reservation
    {
        type: 'warning',
        code: 'CR-R-0000',
        content: `Mașina este ocupată`,
    },
    {
        type: 'success',
        code: 'CR-R-0001',
        content: `Mașină rezervată cu succes`,
    },
    {
        type: 'danger',
        code: 'CR-R-0002',
        content: `Cerere de dată invalidă`,
    },
    // USER Status
    {
        type: 'success',
        code: 'US-S-0000',
        content: `Autentificare reușită`,
    },
    {
        type: 'warning',
        code: 'US-S-0001',
        content: `Contul nu a fost găsit`,
    },
    {
        type: 'success',
        code: 'US-S-0002',
        content: `Email pentru resetarea parolei trimis`,
    },
    {
        type: 'success',
        code: 'US-S-0003',
        content: `Fotografia de profil a fost eliminată`,
    },
    {
        type: 'success',
        code: 'US-S-0004',
        content: `Fotografia de profil a fost schimbată cu succes`,
    },
    {
        type: 'danger',
        code: 'US-S-0005',
        content: `Nu se poate schimba numărul de telefon`,
    },
    {
        type: 'success',
        code: 'US-S-0006',
        content: `Numărul de telefon a fost schimbat cu succes`,
    },
    {
        type: 'danger',
        code: 'US-S-0007',
        content: `Nu se poate schimba parola`,
    },
    {
        type: 'success',
        code: 'US-S-0008',
        content: `Parola a fost schimbată cu succes`,
    },
    {
        type: 'success',
        code: 'US-S-0009',
        content: `Te-ai abonat cu succes la newsletter`,
    },
    {
        type: 'success',
        code: 'US-S-0010',
        content: `Te-ai dezabonat cu succes de la newsletter`,
    },
    // ADVICE Content
    {
        type: 'info',
        code: 'AC-C-0000',
        content: `Te rugăm să te autentifici <a href="${setURLPath()}/pages/user/login.html" class="orange_link">aici</a>`,
    },
    {
        type: 'info',
        code: 'AC-C-0001',
        content: `Te rugăm să te înregistrezi <a href="${setURLPath()}/pages/user/signup.html" class="orange_link">aici</a>`,
    },
    {
        type: 'info',
        code: 'AC-C-0002',
        content: `Te rugăm să reîmprospătezi pagina și să te autentifici din nou`,
    },
    {
        type: 'warning',
        code: 'AC-C-0003',
        content: `Prea multe cereri. Încearcă din nou mai târziu`,
    },  


    // ADMIN Actions
    {
        type: 'success',
        code: 'AD-A-0000',
        content: `Mașină adăugată cu succes`,
    },
    {
        type: 'danger',
        code: 'AD-A-0001',
        content: `Nu au fost selectate fotografii`,
    },
    {
        type: 'success',
        code: 'AD-A-0002',
        content: `Comanda a fost adăugată cu succes`,
    },
    {
        type: 'success',
        code: 'AD-A-0003',
        content: `Clientul a fost adăugat cu succes`,
    },
    {
        type: 'danger',
        code: 'AD-A-0004',
        content: `Clientul deja există`,
    },

    // CLIENT Actions
    {
        type: 'success',
        code: 'CL-A-0000',
        content: `Rezervarea a fost trimisă cu succes. Vezi toate rezervările <a href="${setURLPath()}pages/user/account.html?tab=reservations" class="orange_link">aici</a>`,
    },
    {
        type: 'success',
        code: 'CL-A-0001',
        content: `Rezervarea a fost trimisă cu succes.`,
    },
]