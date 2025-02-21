const navbar = document.querySelector("nav");
const mobNavbar = document.querySelector(".mobNav");
let mobIcon = document.querySelector("#mobIcon");
let logo = document.querySelector("me_index");

//Mobile Navbar 
let span;
let tick = false;
function mobileExpand(){
    if(tick == false){
        mobNavbar.style.display = "flex";
        mobNavbar.style.animation = "expand 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">";
        tick = true;
        clearTimeout(span);
    }else{
        mobNavbar.style.animation = "close 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/hmg.svg\" width=\"60vh\" height=\"60vh\">";
        tick = false;
        span = setTimeout(() => {
            mobNavbar.style.display = "none";
        }, 1000)
    }
}
mobIcon.addEventListener("click", mobileExpand);


//Send to Project Details
let project = $(".project").click(push)
for (let caseStudy of project){
    caseStudy.value = caseStudy.innerText.split("\n")[1]
}

function push(){
    const projectName = this.value;

    sessionStorage.setItem("project", projectName);
    window.location.href = "./00_caseDetails/index.html";
}

// Typing animation
// Typing animation για το "Evangelia Avgoustopoulou."
const welcomeText = ["Evangelia Avgoustopoulou.", "Evangelia.", "Avgoustopoulou."];
let welcomeElement = document.querySelector("#welcome");
let welcomeIndex = 0, welcomeLetter = 0;

welcomeElement.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>";

function typeText(element, textArray, textIndex, letterIndex, callback, speed = 150) {
    let interval = setInterval(() => {
        element.innerHTML += textArray[textIndex][letterIndex];
        letterIndex++;

        if (letterIndex >= textArray[textIndex].length) {
            setTimeout(() => eraseText(element, textArray, textIndex, letterIndex, callback), 5000);
            clearInterval(interval);
        }
    }, speed);
}

function eraseText(element, textArray, textIndex, letterIndex, callback) {
    let interval = setInterval(() => {
        element.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>" + textArray[textIndex].slice(0, letterIndex);
        letterIndex--;

        if (letterIndex < 0) {
            callback();
            clearInterval(interval);
        }
    }, 150);
}

function restartWelcome() {
    welcomeIndex = (welcomeIndex + 1) % welcomeText.length;
    welcomeLetter = 0;
    typeText(welcomeElement, welcomeText, welcomeIndex, welcomeLetter, restartWelcome);
}

// Εκκίνηση animation για το welcome
typeText(welcomeElement, welcomeText, welcomeIndex, welcomeLetter, restartWelcome);

// --- WHO I AM Animation (χωρίς επανάληψη και με scroll detection) ---
const whoIAmText = "ho I Am"; // Αφήνουμε έξω το πρώτο γράμμα "W"
let whoIAmElement = document.querySelector("#whoIAm");
let whoIAmLetter = 0;
let whoIAmStarted = false;
let whoIAmSpeed = 200;

// Εμφανίζουμε το "W" από την αρχή
whoIAmElement.innerHTML = "W";

function typeWhoIAm() {
    let interval = setInterval(() => {
        whoIAmElement.innerHTML += whoIAmText[whoIAmLetter]; // Συνεχίζουμε από το "W"
        whoIAmLetter++;

        if (whoIAmLetter >= whoIAmText.length) {
            clearInterval(interval);
        }
    }, whoIAmSpeed);
}

// Παρακολουθούμε το scroll για να ξεκινήσει το animation
window.addEventListener("scroll", function() {
    if (!whoIAmStarted) {
        let rect = whoIAmElement.getBoundingClientRect();
        let screenHeight = window.innerHeight;

        if (rect.top < screenHeight - 50) { // Όταν πλησιάζει στην οθόνη
            whoIAmStarted = true;
            typeWhoIAm();
        }
    }
});



//Navbar scroll events 
// let r = 195;
// let g = 57;
// let b = 72;
// mobNavbar.style.backgroundColor = `rgb(${r},${g},${b})`;
// addEventListener("scroll" , () => {
    // navbar.style.backgroundColor = `rgba(${r},${g},${b},${window.scrollY/500})` ;
    // mobNavbar.style.backgroundColor = `rgb(${r},${g},${b})`;
    // navbar.style.color = `rgb(${window.scrollY/2},${window.scrollY/2},${window.scrollY/2})`
    // logo.style.filter = "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);";
// });

// Footer
const set2 = ["Thanks For Visiting!","Questions? Say Hi!"];
let quest2 = document.querySelector("#followUp");
let day = new Date().getDay();
function chat(){
    if (day%2 == 0){
        quest2.textContent = set2[0];
    }else{
        quest2.textContent = set2[1];
    }
}
chat();

document.querySelectorAll('.contact a img').forEach(img => {
    img.addEventListener('click', function(event) {
        event.stopPropagation(); // Σταματάει το click να επηρεάζει άλλα στοιχεία
    });
});

document.querySelector('.projectLeft .projectImg').addEventListener('click', function(event) {
    event.preventDefault(); // Σταματάει το redirect
    event.stopPropagation(); // Δεν αφήνει το click να επηρεάσει άλλα στοιχεία
});


// Ypogrammish 3 phraseis sto keimeno
document.addEventListener("DOMContentLoaded", function () {
    const phrases = document.querySelectorAll(".underline-animation");
    let currentIndex = 0;

    function checkScroll() {
        if (currentIndex >= phrases.length) return; // Σταματάει αν έχουν ήδη ενεργοποιηθεί όλες οι φράσεις
        
        let rect = phrases[currentIndex].getBoundingClientRect();
        let screenHeight = window.innerHeight;

        if (rect.top < screenHeight - 50) { // Όταν πλησιάζει στην οθόνη
            phrases[currentIndex].classList.add("underline-active");
            currentIndex++; // Μεταβαίνουμε στην επόμενη φράση

            setTimeout(checkScroll, 1700); // Δίνουμε χρόνο για την ολοκλήρωση της υπογράμμισης πριν πάμε στην επόμενη
        }
    }

    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const highlightElements = document.querySelectorAll(".highlight-animation");

    highlightElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("highlight-active");

            // Μετά από 1.5 δευτερόλεπτα, εξαφανίζουμε την επισήμανση
            setTimeout(() => {
                el.classList.remove("highlight-active");
                el.classList.add("highlight-hide"); // Το κάνει fade out
            }, 1500);
        }, index * 1000); // Καθυστέρηση ανάλογα με τη σειρά εμφάνισης
    });
});
