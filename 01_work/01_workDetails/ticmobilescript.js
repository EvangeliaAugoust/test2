const navbar = document.querySelector("nav");
const mobNavbar = document.querySelector(".mobNav");
let mobIcon = document.querySelector("#mobIcon");

let span;
let tick = false;
function mobileExpand(){
    if(tick == false){
        mobNavbar.style.display = "flex"
        mobNavbar.style.animation = "expand 1s forwards";
        mobIcon.innerHTML = "<img src=\"../../00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">"
        tick = true;
        clearTimeout(span);
    }else{
        mobNavbar.style.animation = "close 1s forwards";
        mobIcon.innerHTML = "<img src=\"../../00_assets/svgs/hmg.svg\" width=\"60vh\" height=\"60vh\">"
        tick = false;
        span = setTimeout(() => {
            mobNavbar.style.display = "none";
        }, 1000)
    }
}
mobIcon.addEventListener("click", mobileExpand);

// footer
const set = ["Thanks For Visiting!","Questions? Say Hi!"];
let quest = document.querySelector("#followUp");
let day = new Date().getDay();
function chat(){
    if (day%2 == 0){
        quest.textContent = set[0];
    }else{
        quest.textContent = set[1];
    }
}
chat();


// ΖΟΥΜ ΚΑΘΕ ΕΙΚΟΝΑΣ
const processImg = $(".show").map(function () {
    return $(this).attr("src") || $(this).attr("data-src");
}).get();

$('.show').click(function () {
    $('body').css('overflowY', 'hidden');
    $(".viewing").css("display", "flex");

    let imgIndex = $(".show").index(this);
    let imgSrc = $(this).attr("src") || $(this).attr("data-src");
    let zoomImg = $("#zoom");

    // Προεπιλεγμένες τιμές
    let width = "auto";
    let height = "auto";
    let maxWidth = "100vw";
    let maxHeight = "100vh";
    let borderRadius = "0px";

    // Έλεγχος με βάση τις κλάσεις της εικόνας
    if ($(this).hasClass("subshow")) {
        maxWidth = "80vw";
    }
    if ($(this).hasClass("storyboard-img")) {
        maxWidth = "70vw";
    }
    if ($(this).hasClass("lofi-img")) {
        maxHeight = "100vh";
    }
    if ($(this).hasClass("lofi-gif") || $(this).hasClass("hifi-gif")) {
        maxWidth = "100vw";
        maxHeight = "100vh";
        borderRadius = "25px";
    }
    if ($(this).hasClass("hifi-gif")) {
        borderRadius = "25px";
        maxWidth = "100vw";
        maxHeight = "100vh";
    }

    if (imgSrc.includes("hifiprototype1") || imgSrc.includes("hifiprototype2")) {
        maxHeight = "100vh";
        maxWidth = "auto";
    }

    // **ΝΕΟ: Αν η οθόνη είναι μικρότερη από 768px (κινητό), αύξησε το zoom στα subshow & storyboard-img**
    if (window.innerWidth <= 768) {
        if ($(this).hasClass("subshow") || $(this).hasClass("storyboard-img")) {
            maxWidth = "100vw"; // Κάνει το zoom μεγαλύτερο στο κινητό
        }
    }

    // Εφαρμογή των ρυθμίσεων
    zoomImg.css({
        "width": width,
        "height": height,
        "max-width": maxWidth,
        "max-height": maxHeight,
        "border-radius": borderRadius
    });

    // Ενημέρωση της εικόνας
    zoomImg.attr("src", imgSrc);
});

// Κλείσιμο της εικόνας αν ο χρήστης κάνει κλικ έξω από αυτήν ή στην περιοχή .viewing
$(".viewing").click((e) => {
    // Κλείσιμο μόνο αν ο χρήστης κάνει κλικ έξω από την εικόνα
    if (e.target === e.currentTarget) {
        $('body').css('overflowY', 'auto');
        $(".viewing").css("display", "none");

        // Reset zoom
        zoomImg.style.transform = "translate(0px, 0px) scale(1)";
        scale = 1;
        currentX = 0;
        currentY = 0;    
    }
});

// Ζουμ με το scroll (wheel)
let scale = 1;
const zoomImg = document.getElementById("zoom");

zoomImg.addEventListener("wheel", function (e) {
    e.preventDefault();

    const delta = e.deltaY;
    scale += delta > 0 ? -0.1 : 0.1;

    // Περιορισμοί
    scale = Math.min(Math.max(1, scale), 3);
    zoomImg.style.transform = `scale(${scale})`;
});

// Αρχή drag
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

zoomImg.addEventListener("mousedown", (e) => {
    if (scale === 1) return; // Δεν χρειάζεται drag χωρίς zoom
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    zoomImg.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    zoomImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    zoomImg.style.cursor = "grab";
});

// Κλείσιμο με κλικ στην εικόνα μόνο αν είναι στο αρχικό μέγεθος (scale == 1)
zoomImg.addEventListener("click", (e) => {
    if (scale === 1) { // Κλείσιμο μόνο αν η εικόνα είναι στο αρχικό της μέγεθος
        $('body').css('overflowY', 'auto');
        $(".viewing").css("display", "none");

        // Reset zoom
        zoomImg.style.transform = "translate(0px, 0px) scale(1)";
        scale = 1;
        currentX = 0;
        currentY = 0;    
    }
});


// ΑΝΙΜΑΤΙΟΝ ΓΙΑ ΚΑΘΕ ΤΙΤΛΟ. Επιλέγουμε όλα τα στοιχεία με την κλάση "label"
const labels = document.querySelectorAll(".label");
let observedLabels = new Set(); // Set για να θυμόμαστε ποια έχουν ήδη αναπαραχθεί

labels.forEach(label => {
    const fullText = label.textContent; // Παίρνουμε το πλήρες κείμενο
    label.textContent = fullText.charAt(0); // Αφήνουμε μόνο το πρώτο γράμμα
    
    function typeText() {
        let index = 1; // Ξεκινάμε από το δεύτερο γράμμα
        let interval = setInterval(() => {
            label.textContent += fullText.charAt(index);
            index++;

            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 90); // Μείωσα την ταχύτητα στα 50ms για πιο γρήγορη εμφάνιση
    }

    // Χρησιμοποιούμε το Intersection Observer API
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !observedLabels.has(label)) {
                observedLabels.add(label); // Προσθέτουμε το στοιχείο στο Set για να μην ξαναπαίξει
                typeText();
                observer.unobserve(label); // Σταματάμε την παρακολούθηση μετά την πρώτη φορά
            }
        });
    }, { threshold: 0.5 });

    observer.observe(label); // Παρακολουθούμε το κάθε label
});


//Lazy Loading (Αναβλητική Φόρτωση)
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".lazy-load"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Βάζουμε το σωστό src
                img.classList.remove("lazy-load"); // Αφαιρούμε την κλάση
                observer.unobserve(img); // Δεν το παρακολουθούμε άλλο
            }
        });
    }, { rootMargin: "800px" }); // Ξεκινάει να φορτώνει 200px πριν εμφανιστεί

    lazyImages.forEach(img => observer.observe(img));
});