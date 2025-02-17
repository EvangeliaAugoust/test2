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

//zoomies jq
const processImg = $(".show").map(function(){return $(this).attr("src");}).get();
$('.show').click(function() {
    $('body').css('overflowY', 'hidden');
    $(".viewing").css("display", "flex");

    if(processImg[$(this).index('.show')] == "../../00_assets/projects/cases/evidence/tha/pt1.gif"){
        $("#zoom").css("height", "80vh");
        $("#zoom").css("width", "auto");
        $("#zoom").css("border-radius", "50px");
    }else{
        $("#zoom").css("width", "85vw");
        $("#zoom").css("height", "auto");
        $("#zoom").css("border-radius", "0px");
    }

    $("#zoom").attr("src",processImg[$(this).index('.show')]);
});
$(".viewing").click(() => {
    $('body').css('overflowY', 'auto');
    $(".viewing").css("display", "none");
});

