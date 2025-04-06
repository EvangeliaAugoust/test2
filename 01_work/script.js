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
        mobIcon.innerHTML = "<img src=\"./00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">"
        tick = true;
        clearTimeout(span);
    }else{
        mobNavbar.style.animation = "close 1s forwards";
        mobIcon.innerHTML = "<img src=\"./00_assets/svgs/open.svg\" width=\"60vh\" height=\"60vh\">"
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

const introPart1 = "Hi! 👋"; 

const introTextParts = [
    " I’m an aspiring UX/UI Designer with a background in",
    "Computer Science, passionate about creating intuitive,",
    "user-friendly and accessible designs ✨"
];

const mobileIntroParts = [
    "I’m an aspiring UX/UI Designer",
    "with a background in Computer Science,",
    "passionate about creating designs",
    "that are intuitive, user-friendly",
    "and accessible ✨"
];

let introElement = document.querySelector("#introText");
let introLetter = 0;
let introSpeed = 40;
let partIndex = 0;

const isMobile = window.innerWidth <= 600;
const activeTextParts = isMobile ? mobileIntroParts : introTextParts;

introElement.innerHTML = "";
introElement.style.visibility = "visible";

// Πρώτο κομμάτι "Hi! 👋"
function typeIntroPart1() {
    introElement.innerHTML = "Hi! <span id='waveEmoji' style='opacity: 0;'>👋</span>";
    let interval = setInterval(() => {
        if (introLetter < 3) {
            introElement.innerHTML = introPart1.slice(0, introLetter + 1) + " <span id='waveEmoji' style='opacity: 0;'>👋</span>";
            introLetter++;
        } else {
            clearInterval(interval);
            document.getElementById("waveEmoji").style.opacity = 1;
            introElement.innerHTML += "<br>";
            setTimeout(() => typeIntroPart2(partIndex), 1000);
        }
    }, introSpeed);
}

// Animation για το υπόλοιπο κείμενο
function typeIntroPart2(index) {
    if (index >= activeTextParts.length) return;

    let currentPart = activeTextParts[index];
    let partLetter = 0;

    let interval = setInterval(() => {
        if (partLetter < currentPart.length) {
            introElement.innerHTML += currentPart[partLetter];
            partLetter++;
        } else {
            clearInterval(interval);
            introElement.innerHTML += "<br>";
            typeIntroPart2(index + 1);
        }
    }, introSpeed);
}

// Εκκίνηση 1 δευτερόλεπτο μετά το load
setTimeout(typeIntroPart1, 1000);
