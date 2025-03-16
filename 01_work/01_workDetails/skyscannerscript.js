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


// ΖΟΥΜ ΚΑΘΕ ΕΙΚΟΝΑΣ
const processImg = $(".show").map(function(){return $(this).attr("src");}).get();

$('.show').click(function() {
    $('body').css('overflowY', 'hidden');
    $(".viewing").css("display", "flex");

    let imgIndex = $(".show").index(this);
    let imgSrc = processImg[imgIndex];
    let zoomImg = $("#zoom");

    // Προεπιλεγμένες τιμές
    let width = "auto";
    let height = "auto";
    let maxWidth = "85vw"; 
    let maxHeight = "85vh"; 
    let borderRadius = "0px";

    // Έλεγχος με βάση τις κλάσεις της εικόνας
    if ($(this).hasClass("subshow")) {
        maxWidth = "80vw";  
    }

    if ($(this).hasClass("lofi-img")) {
        maxHeight = "90vh";  
    }
    if ($(this).hasClass("lofi-gif") || $(this).hasClass("hifi-gif")) {
        maxWidth = "90vw";
        maxHeight = "95vh";
        borderRadius = "25px";
    }
    if ($(this).hasClass("hifi-gif")) {
        borderRadius = "25px";
        maxWidth = "100vw";
        maxHeight = "98vh";
    }
    
    // ΝΕΟ: Έλεγχος για την κλάση "zoomable"
    if ($(this).hasClass("zoomable")) {
        maxWidth = "100vw"; // Μπορείς να αλλάξεις τις τιμές για το zoom όταν η εικόνα έχει την κλάση zoomable
        maxHeight = "100vh";
    }

    if ($(this).hasClass("paper")) {
        maxWidth = "100vw"; // Μπορείς να αλλάξεις τις τιμές για το zoom όταν η εικόνα έχει την κλάση zoomable
        maxHeight = "100vh";
    }

    if ($(this).hasClass("hd")) {
        maxWidth = "100vw"; // Μπορείς να αλλάξεις τις τιμές για το zoom όταν η εικόνα έχει την κλάση zoomable
        maxHeight = "100vh";
    }

    if ($(this).hasClass("hp")) {
        maxWidth = "100vw"; // Μπορείς να αλλάξεις τις τιμές για το zoom όταν η εικόνα έχει την κλάση zoomable
        maxHeight = "100vh";
    }

    if ($(this).hasClass("cv")) {
        maxWidth = "100vw"; // Μπορείς να αλλάξεις τις τιμές για το zoom όταν η εικόνα έχει την κλάση zoomable
        maxHeight = "100vh";
    }

    if ($(this).hasClass("digital")) {
        maxWidth = "auto"; // Αύξηση του πλάτους κατά το zoom
        maxHeight = "180vh"; // Αύξηση του ύψους αλλά με περιορισμό
    }

    // **ΝΕΟ: Ρύθμιση για τις συγκεκριμένες εικόνες χωρίς παραμόρφωση**
    if (imgSrc.includes("sitemap") || imgSrc.includes("cm") || 
        imgSrc.includes("hifiprototype1") || imgSrc.includes("hifiprototype2")) {
        maxHeight = "100vh"; // Περιορίζουμε το ύψος χωρίς να αλλοιώνουμε την εικόνα
        maxWidth = "auto";  // Το αφήνουμε αυτόματο για να μην τραβιέται
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

$(".viewing").click(() => {
    $('body').css('overflowY', 'auto');
    $(".viewing").css("display", "none");
});
