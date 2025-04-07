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
    }, { rootMargin: "1000px" }); // Ξεκινάει να φορτώνει 200px πριν εμφανιστεί

    lazyImages.forEach(img => observer.observe(img));
});


//Ζουμ Εικόνας
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

let scale = 1;
let isDragging = false;
let hasDragged = false;
let startX, startY;
let currentX = 0, currentY = 0;

const zoomImg = document.getElementById("zoom");

// Κλικ σε εικόνα για zoom
$(".show").click(function () {
    $('body').css('overflowY', 'hidden');
    $(".viewing").css("display", "flex");

    const imgSrc = $(this).attr("src") || $(this).attr("data-src");

    // Προεπιλεγμένες τιμές
    let maxWidth = "85vw", maxHeight = "85vh", borderRadius = "0px";

    // Προσαρμογές ανά κλάση
    if ($(this).hasClass("cv") || $(this).hasClass("paper")) {
        maxWidth = "100vw";
        maxHeight = "100vh";
    }
    if ($(this).hasClass("subshow")) maxWidth = "80vw";
    if ($(this).hasClass("digital")) {
        maxWidth = "auto";
        maxHeight = "180vh";
    }
    if ($(this).hasClass("example")) {
        maxWidth = "auto";
        maxHeight = "101vh";
    }
    if ($(this).hasClass("hifi-gif")) {
        maxWidth = "100vw";
        maxHeight = "100vh";
        borderRadius = "25px";
    }
    if (imgSrc.includes("sitemap") || imgSrc.includes("cm")) {
        maxWidth = "auto";
        maxHeight = "100vh";
    }

    // Εφαρμογή CSS
    $(zoomImg).css({
        width: "auto",
        height: "auto",
        "max-width": maxWidth,
        "max-height": maxHeight,
        "border-radius": borderRadius
    });

    zoomImg.src = imgSrc;
});

// Κλείσιμο με click έξω από την εικόνα
$(".viewing").click((e) => {
    if (e.target === e.currentTarget) {
        $('body').css('overflowY', 'auto');
        $(".viewing").css("display", "none");
        zoomImg.style.transform = "translate(0px, 0px) scale(1)";
        scale = 1;
        currentX = 0;
        currentY = 0;
    }
});

// Κλικ πάνω στην εικόνα: μόνο αν δεν έγινε drag
zoomImg.addEventListener("click", (e) => {
    const naturalHeight = zoomImg.naturalHeight;
    const containerHeight = window.innerHeight;
    const isTaller = naturalHeight > containerHeight;

    if (!hasDragged && (scale === 1 || !isTaller)) {
        $('body').css('overflowY', 'auto');
        $(".viewing").css("display", "none");
        zoomImg.style.transform = "translate(0px, 0px) scale(1)";
        scale = 1;
        currentX = 0;
        currentY = 0;
    }

    hasDragged = false;
});

// Μόνο για desktop: zoom + drag
if (!isMobile) {
    zoomImg.addEventListener("wheel", function (e) {
        e.preventDefault();
        const delta = e.deltaY;
        scale += delta > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(1, scale), 3);
        zoomImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
    });

    zoomImg.addEventListener("mousedown", (e) => {
        const naturalHeight = zoomImg.naturalHeight;
        const containerHeight = window.innerHeight;
        const isTaller = naturalHeight > containerHeight;

        if (scale === 1 && !isTaller) return;

        isDragging = true;
        hasDragged = false;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        zoomImg.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const moveX = e.clientX - startX;
        const moveY = e.clientY - startY;

        if (Math.abs(moveX - currentX) > 5 || Math.abs(moveY - currentY) > 5) {
            hasDragged = true;
        }

        currentX = moveX;
        currentY = moveY;
        zoomImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        zoomImg.style.cursor = "grab";
    });
}