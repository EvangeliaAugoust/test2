// addEventListener("scroll", () => {
//     if(window.scrollY == 0){
//         window.scrollTo(500,500)
//     }
// });

let info = document.querySelector("#info");
let joyce = document.querySelector("#joyce");
const navbar = document.querySelector("nav");
const mobNavbar = document.querySelector(".mobNav");
let mobIcon = document.querySelector("#mobIcon");

let span;
let tick = false;
function mobileExpand(){
    if(tick == false){
        mobNavbar.style.display = "flex"
        mobNavbar.style.animation = "expand 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">"
        tick = true;
        clearTimeout(span);
    }else{
        mobNavbar.style.animation = "close 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/hmg.svg\" width=\"60vh\" height=\"60vh\">"
        tick = false;
        span = setTimeout(() => {
            mobNavbar.style.display = "none";
        }, 1000)
    }
}
mobIcon.addEventListener("click", mobileExpand);

// , "\"If opportunity doesn't knock, build a door.\" - Milton Berle"
// const set = ["Thanks For Visiting!","Questions?","Comments?", "Say Hi!"]
const set = ["Thanks For Visiting!","Questions? Say Hi!"]
let quest = document.querySelector("#followUp")
// let sent = 0;
// let letter = 0;
// quest.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>";

// function pause(){
//     let say = setInterval(() => {
//         quest.innerHTML += set[sent][letter]
//         letter += 1;
//         if(letter >= set[sent].length){
//             setTimeout(() => {
//                 erase()
//             },5000)
//             clearInterval(say);    
//         }
//     }, 150);
// }

// function erase(){
//     let stop = setInterval(() => {
//         quest.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>" + set[sent].slice(0,letter)
//         letter -= 1;
//         if (letter < 0){
//             restate()
//             clearInterval(stop)
//         }
//     }, 150)
// }

// pause()
// function restate(){
//     if(sent == 2){
//         sent = 0;
//     }else{
//         sent += 1;
//     }
//     letter = 0;
//     pause()
// }

// footer
let day = new Date().getDay();
function chat(){
    if (day%2 == 0){
        quest.textContent = set[0];
    }else{
        quest.textContent = set[1];
    }
}
chat()

// credit to my sister <3
joyce.style.display = "none";
info.addEventListener("click", () => {
    if (joyce.style.display == "none"){
        joyce.style.animation = "in 1s forwards"
        joyce.style.display = "block";
        info.style.animation = "in 1s forwards"
    }else{
        joyce.style.animation = "jout 1s forwards"
        info.style.animation = "out 1s ease"
        setTimeout(() => {
            joyce.style.display = "none";
        }, 1000)
    }
})

// --- INTRO TEXT Animation (χωρίς επανάληψη, ξεκινάει με το load) ---
const introPart1 = "Hi! 👋"; // Το πρώτο κομμάτι που περιλαμβάνει το "Hi! 👋"
const introText = " I'm an aspiring UX/UI Designer, graduated in Computer Science, with a burning passion for creating intuitive user-friendly and equitable designs✨"; // Αφήνουμε έξω το "Hi! 👋"
let introElement = document.querySelector("#introText");
let introLetter = 0;
let introSpeed = 40;

// Εμφανίζουμε το πρώτο κομμάτι με το "Hi! 👋"
introElement.innerHTML = "";

// Λειτουργία για το πρώτο μέρος του animation (μόνο το "Hi! 👋")
function typeIntroPart1() {
    let interval = setInterval(() => {
        if (introLetter < introPart1.length) { // Γράφουμε μόνο το "Hi! 👋"
            introElement.innerHTML += introPart1[introLetter];
            introLetter++;
        } else {
            clearInterval(interval); // Σταματάμε μόλις ολοκληρωθεί το "Hi! 👋"
            introLetter = 0; // Επαναφέρουμε το introLetter για το επόμενο τμήμα
            setTimeout(typeIntroPart2, 1000); // Περιμένουμε 1 δευτερόλεπτο και μετά ξεκινάμε το δεύτερο μέρος
        }
    }, introSpeed);
}

// Λειτουργία για το δεύτερο μέρος του animation (ο υπόλοιπος κείμενο)
function typeIntroPart2() {
    let interval = setInterval(() => {
        if (introLetter < introText.length) { // Συνεχίζουμε με το υπόλοιπο κείμενο
            introElement.innerHTML += introText[introLetter];
            introLetter++;
        } else {
            clearInterval(interval); // Σταματάμε όταν τελειώσει το κείμενο
        }
    }, introSpeed);
}

// Ξεκινάμε το animation μόλις φορτώσει η σελίδα
window.addEventListener("load", typeIntroPart1);


// Ξεκινάμε το animation μόλις φορτώσει η σελίδα
window.addEventListener("load", typeIntroPart1);