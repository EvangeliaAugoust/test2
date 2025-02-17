const navbar = document.querySelector("nav");
const mobNavbar = document.querySelector(".mobNav");
let mobIcon = document.querySelector("#mobIcon");

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

//Navbar scroll events 
let r = 247;
let g = 75;
let b = 91;
mobNavbar.style.backgroundColor = `rgb(${r},${g},${b})`;
addEventListener("scroll" , () => {
    // Pink: 247,75,91 
    // Blue: 77,176,244 
    navbar.style.backgroundColor = `rgba(${r},${g},${b},${window.scrollY/500})` ;
    mobNavbar.style.backgroundColor = `rgb(${r},${g},${b})`;
    navbar.style.color = `rgb(${window.scrollY/2},${window.scrollY/2},${window.scrollY/2})`
});


//Send to Project Details
let project = $(".project").click(push)
for (let caseStudy of project){
    caseStudy.value = caseStudy.innerText.split("\n")[1]
}

function push(){
    const projectName = this.value;

    sessionStorage.setItem("project", projectName);
    window.location.href = "./02_projectDetails/index.html";
}