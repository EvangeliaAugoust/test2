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
    if ($(this).hasClass("storyboard-img")) {
        maxWidth = "70vw";  
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

    // **ΝΕΟ: Ρύθμιση για τις συγκεκριμένες εικόνες χωρίς παραμόρφωση**
    if (imgSrc.includes("digital 1") || imgSrc.includes("digital 2") || 
        imgSrc.includes("hifiprototype1") || imgSrc.includes("hifiprototype2")) {
        maxHeight = "95vh"; // Περιορίζουμε το ύψος χωρίς να αλλοιώνουμε την εικόνα
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



