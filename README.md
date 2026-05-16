<h1>Documentație pentru acest proiect</h1>
<br>
<h2>Pentru juriu</h2>
<ul>
    <li>Pentru deschiderea proiectului local trebuie să-l deschideți cu Live Server (extensie pentru VS)</li>
    <li>Link-ul pentru GitHub pages: <a href="https://marius0123.github.io/taxi-tja/">https://marius0123.github.io/taxi-tja/</a></li>
    <li>Link-ul pentru GitHub: <a href="https://github.com/Maugustin18/PrimeDrive">https://github.com/Maugustin18/PrimeDrive</a></li>
</ul>
<hr>
<h2>Principii de lucru</h2>
<ul>
    <li>PENTRU A DESCHIDE ACEST PROIECT TREBUIE DE INSTALAT Live Server IN VS CODE SI DE DESCHIS CU EL</li>
    <li>Acest proiect este divizat in componente javascript (similar cu React.js)</li>
    <li>Denumirile tuturor componentelor, precum și a fișierelor cu date (mapa 'json') sunt scrise cu literă mare</li>
    <li>Denumirile tuturor componentelor trebuie să coincidă cu denumirea fișierelor în care se află</li>
    <li>La stilizare există o listă de clase globale cu stiluri predefinite (vor mai apărea pe parcursul dezvoltării proiectlui): 
        <ul>
            <li>content_block (blocul în care se plasează conținutul unei secțiuni; are lățime stabilită)</li>
        </ul>
    </li>
    <li>Fișierurile cu stiluri conțin variabile cu măsuri(font-size, font-weight, height, gap, etc) precum și cu culori ce trebuie utilizate în stilizare</li>
    <li>Elementul body în fișierele .html conține doar header, main și footer, restul vine din fișierele .js</li>
</ul>
<hr>
<br>
<h2>To do:</h2>
<ul>
    <li><s>Link check all pages //done//</s></li>
    <li><s>Car catalog more pages responzive numbers //done//</s></li>
    <li><s>Divide car info //done//</s></li>
    <li><s>User log in / sign in pages //done//</s></li>
    <li><s>Header height //done//</s></li>
    <li><s>User dashboard //done//</s></li>
    <li><s>Correct email inputs //done//</s></li>
    <li><s>Account event deligation //done//</s></li>
    <li><s>Customised alerts //done//</s></li>
    <li><s>Loader //done//</s></li>
    <li><s>Similar cars for each car //done//</s></li>
    <li><s>Add location for pickup and dropoff //done//</s></li>
    <li><s>User log in / sign in //done//</s></li>
    <li><s>Account Email verification //done//</s></li>
    <li><s>Review sign in and sign up mobile styles //done</s></li>
    <li><s>Fix the customised alerts //done</s></li>
    <li><s>Fix the loader //dpne</s></li>
    <li><s>Peronalised home slider //done</s></li>
        <br>
    <li>Transform all to func</li>
    <li>Controller !!!</li>
    <li>Routers !!!</li>
        <br>
    <li>Admin dashboard</li>
    <li>Disclaimer for new pages (log in, admin)</li>
    <li>Remake car page</li>
    <li>Car page form auto-fill</li>
    <li>User cars and history</li>
    <li>In navbar, remake the link for admin account</li>
    <li>Remake our cars controller</li>
    <li>Add user links to mobile nav</li>
        <br>
    <li>Two step authentiction for admins</li>
    <li>Make rent car ad</li>
    <li>Authorize github pages for firebase auth</li>
    <li>Deletion, terms & conditions, privacy policies pages</li>
    <li>Session manager server (Firebase Admin SDK)</li>
    <li>Go from Realtime DB to Firestore in all apps</li>
        <br>
    <li>Add price and popularity graphs for each car</li>
    <li>Cloud functions for admin notifications</li>
    <li>Reviews db</li>
    <li>Social media accounts</li>
    <li>Blog</li>
    <li>Google analytics for admin board</li>
    <li>Sign up for newsletter system</li>
    <li>Git secrets</li>
    <li>Write documentation</li>
</ul>
<hr>
<br>
<br>
<hr>
<ul>
<h2>Alert codes</h2>
    /Global 2 letters/ - /Local letter/ - /Alert number/
</ul>



## plan de optimizare (probleme svg)
1. a) adaga la svg view box, height, width initial
1. stilurile de doua se cheama - schimba inner html cu append
2. daca totusi ai probleme la chestiile adaugate prin javascript cheama on load la css-ul necesar elementelor si aplica js dupa
3. daca ai proleme cu loaderu dupa 1. si 2. (n-ar trebuie sa fie, aplica ppaternu de genu)
```
 <script>
        const setLoaderTimeout = () => setTimeout(()=>{
            console.log(" i run once")
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.body_container').style.display = 'block';
}, 1000 * 3);
let tt = null;
         const unsetLoader = () =>  {
            console.log("set tt")
            clearTimeout(tt);
            tt = setLoaderTimeout(tt)
         }
    </script>
```

4. inner html mereu face re render la tot componentul la care schimbi inner html-ul - nu-i tare optim, se creaza elemente cu referinta noi etc. (nu-i strasnic cat n-ai probleme de eemplu: inner html se face o data pentru componente statice)
