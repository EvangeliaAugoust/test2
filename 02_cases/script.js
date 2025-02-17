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

//Typing animation
const set = ["Judy Zhang.","Judy.","Zhang."]
let quest = document.querySelector("#welcome")
let sent = 0;
let letter = 0;
quest.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>";

function pause(){
    let say = setInterval(() => {
        quest.innerHTML += set[sent][letter]
        letter += 1;
        if(letter >= set[sent].length){
            setTimeout(() => {
                erase()
            },5000)
            clearInterval(say);    
        }
    }, 150);
}

function erase(){
    let stop = setInterval(() => {
        quest.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>" + set[sent].slice(0,letter)
        letter -= 1;
        if (letter < 0){
            restate()
            clearInterval(stop)
        }
    }, 150)
}

pause()
function restate(){
    if(sent == 2){
        sent = 0;
    }else{
        sent += 1;
    }
    letter = 0;
    pause()
}

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