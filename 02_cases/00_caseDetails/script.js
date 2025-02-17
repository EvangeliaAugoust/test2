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
        mobIcon.innerHTML = "<img src=\"../../00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">";
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


const project = sessionStorage.getItem("project")

const projectData = {
    "Stephen King Villain API":{
        role: "Sole UI Designer, Front-End & Back-End Developer"
        ,overview: "The Stephen King Villain API is a node.js executable webpage. Complete with both Front-End and Back-End development, you can run it on your local machine to see what kind of Stephen King Villain you are. "
        ,problem: "Are you a horror addict? Ever watched \"IT\" or \"The Boogeyman\"? Well, you probably heard of Stephen King then. Reading his horror novels and watching their adapted horror movies are great and all, but like a true horror addict, if you were in these horrific narratives and story retellings, you'd want to know which character you were, but more intriguing, which villain you are.  "
        ,solution: "Well, look no further! Utilizing an open-source Application Programming Interface (API) on Stephen King's Villains and some magic in the Back-End, you can pinpoint exactly which villain you would be portrayed as in the Stephen King universe. The results may surprise, horrify, or intrigue you. Just a click of a button or 2 and this webpage will satisfy your curiosity in the best way possible!"
        ,design: "The design for this is relatively short, sweet, and simple. The background is pure black to set the atmosphere, the font color is red because of blood, and the font style is this childlike marker handwriting but in all caps to convey some sense of false urgency. To interact with the webpage and get the results, all the users would need to input is their first and last names and their year of birth. After submitting their input, it should bring the user to a different page that displays the resulting villain name, and other available details regarding that villain from the API."
        ,develop: "The development is where all the magic happens. The Stephen King Villain website utilizes node.js, express, body-parser (as the middleware), Axios, and embedded javascript to function. Through its client-server architectural programming allows the user to receive a computed response from the fetched RESTful Stephen King API found <a href=\"https://stephen-king-api.onrender.com\" target=\"_blank\" id=\"elink\">here</a>. The express server then uses event handlers to retrieve data from the API and computes and filters them through a specific set of conditional statements to display a particular villain to the user. To display the computed data, this webpage utilizes embedded javascript to translate the information onto the webpage, showing a different result if the output comes out empty. To run this for yourself, follow the instructions in the GitHub Repository README (found below)!"
        ,images: {
            figma: "../../00_assets/projects/design/figma/skapi.gif" 
            ,website: "../../00_assets/projects/design/website/skapi.png"
        }
        ,links: {
            figma: "none" 
            ,website: "https://github.com/JudyZhang05/JudyZhang_CSCI39548/tree/main/final"
        }
    }
    ,"An Unlucky Day":{
        role: "Sole UI Designer & Front-End Developer"
        ,overview: "The \"An Unlucky Day\" project is a multi-paged interactive story complete with animated illustrations and multiple story endings. This interactive story is operated by users in a simple interface where there are only ever 2 options to choose from. Both of these options could alter the endings and there is no way to backtrack to the scene before, making for a more exciting experience.  "
        ,problem: "none"
        ,solution: "none"
        ,design: "The interactive story appears in a window-like view with a solid black background to immerse the audience in the story. I wanted to fully convey my vision of the scenes to the audience without having the imagery too distracting to focus on the dialogue, thus I designed everything else rather simple and in a stark white color to contrast against the black background and elaborate paintings. The rounded borders of the story options and window screen illude to a more playful style. The dialogue is typed out letter by letter at a slow pace to give the audience time to read and analyze the evolving plot. I made sure to have the dialogue play one at a time from top to bottom to prevent confusion between them and the context."
        ,develop: "This interactive story is built within the online integrated development environment known as \"GLITCH\". You can visit the repository <a href=\"https://glitch.com/edit/#!/judy-zhang-medp-website?path=index.html%3A1%3A0\" target=\"_blank\" id=\"elink\">here</a>. There, you will find multiple HTML and CSS pages to build each scene of the story, some basic HTML and CSS with simple Document Object Model (DOM) programming in JavaScript utilizing their built-in functions to slowly output the dialogue and automatically lead the viewer to the next scene after a certain amount of time has passed on one screen, creating an autoplay feature of the sort."
        ,images: {
            figma: "none" 
            ,website: "../../00_assets/projects/design/website/unlucky.gif"
        }
        ,links: {
            figma: "none" 
            ,website: "https://judy-zhang-medp-website.glitch.me/lab10.html"
        }
    }
    ,"Feel ReLeaf":{
        role: "Sole UI Designer & Front-End Developer"
        ,overview: "Feel ReLeaf is a mental health awareness and support website concept that allows user to anonymously log their deepest darkest secret to relieve them of the burden. This website is aimed to assist people who tend to bottle up their emotions in an unhealthy manner or those who simply don't have anyone to confide in but would like others to hear. Additionally, there would be an option for those who would like to seek professional help.  "
        ,problem: "The act of keeping a secret has been well studied and research shows that they have a direct negative impact on one's mental, emotional, physical, and spiritual health. Burdening yourself with a secret, especially negative ones, has proven to cause anxiety and distress from an increase in stress hormones. Additionally, there could be circumstances that may prohibit someone's physical access to professional help.  "
        ,solution: "Feel ReLeaf, offers a free alternative to help those who are seeking to confide in a larger community or professional aid remotely. No one deserves to suffer in solitude and isolation, and sometimes simply talking about it could help significantly. Even possibly clearing their headspace and relieving them of a much too heavy burden that was placed on them inadvertently. Mental health is a critical underlying issue that does not constrain itself to one state or one culture. This happens worldwide and for that reason, I knew I had to incorporate a translation option, to reach a global audience. Feel ReLeaf is a website that focuses on becoming a reliable and supportive place for those who need it."
        ,design: "For this design, I needed to recreate a space that resembled somewhere one would feel liberated. Free of all their ongoing burdens and struggles. For a moment, I wanted the user to be in a headspace where they wouldn't feel obligated to talk or take action, but more like they were accepting a warm embrace of acceptance, understanding, and being generously welcomed. Thus, I picked out some open fields peaceful nature scenes, surrounded by flowers and clear open skies. The duo nature theme worked perfectly to achieve the sentiment that I was going for on both the write and read secret pages. Along with the bright pastels and fancy script-like font provides the professional edge that I wanted to maintain. <br/><br/> *Note: This was my graduating project that I presented for a summer course with Code First Girls. Check out my presentation below!"
        ,develop: "Ultizing the integrated programming environment called \"Codepen\", I developed a website that is separated into two sections. A write a secret section and a read a secret section. You would not be able to access the read a secret without inputting a secret of your own. There are some placeholder secrets in the read-a-secret section collected by anonymous people online. Additionally, I implemented a leave another button so you could write another secret and read another button so that you can shuffle through the secrets, perhaps even finding yours in the mix. The translation option stays between the write and read secret pages, while the background images and color pallet slowly transition from a pastel green to a lilac purple. The website is complete with some smooth animations in the beginning to welcome the users and the transition between the two separate sections. I purposefully animated the transition to seem like flipping a page over to invoke an emotion as if they've turned a new page or started a new chapter having relieved themselves of this secret. <br/><br/> *Note: The translations are no longer functional."
        ,images: {
            figma: "../../00_assets/projects/design/figma/releaf.png" 
            ,website: "../../00_assets/projects/design/website/releaf.gif"
        }
        ,links: {
            figma: "https://docs.google.com/presentation/d/1hiWcLpxnhXlikmNwbDribheqNQfGNtTrIN6si_JSe48/edit#slide=id.g157cf677799_0_0" 
            ,website: "https://codepen.io/Judy-Zhang-the-styleful/pen/wvQQYmy?editors=1000"
        }
    }
    ,"Klicky":{
        role: "UI Designer & Co Front-End Developer"
        ,overview: "The Klicky project is a website that was designed and developed to be a LinkedIn clone while keeping track of what and where on screen the user's interaction was most popular. The user's interface and content reflected LinkedIn's image and professionalism while collecting and sending the user's interactions into a Firebase database. With this quantitive data, my team and I decided to create a heat map to visualize this."
        ,problem: "none"
        ,solution: "none"
        ,design: "Taking into consideration LinkedIn's image and professionalism, I paid careful attention to the LinkedIn clone's style and layout. I thoroughly planned out what aspects of the original design I would make the clone inherit while adding some creative liberty to generate more diversity.  Some of these liberties that I created were the comical advertisement displayed on the right sidebar and the hearted follow element on the top right of each post. The placeholder content and reactions I supplied to the clone reflect the lively and uplifting community that LinkedIn has produced over the years. All these elements pieced together create an enjoyable and inviting experience for new and revisiting users. <br/><br/> *Note: This was my graduating project that I presented for a sprinternship with BreakThroughTech and LinkedIn. Check out my presentation below!"
        ,develop: "Throughout the development of Klicky, we split into 2 different groups dedicated to various areas of the project. I was tasked with HTML/CSS and the Firebase Database Team. In HTML/CSS, I utilized my knowledge and focused primarily on the presentation of the website, some tasks I completed were adding new sections to the website to diversify the interactions available to the user, manipulating the scale of individual sections, adding posts to replicate an active platform, creating mouse effects for a more engaging experience, and more. In the Firebase Database team, I focused on collecting and keeping track of user's interaction with the webpage and adding them to a Firebase database. When the user clicks on a button or anywhere on the screen, it automatically appends itself to the database instantly. <br/><br/>*Note: To run this for yourself, follow the instructions in the GitHub Repository README (found below)!"
        ,images: {
            figma: "../../00_assets/projects/design/figma/klicky.png" 
            ,website: "../../00_assets/projects/design/website/klicky.gif"
        }
        ,links: {
            figma: "https://docs.google.com/presentation/d/1Zzm7Qs5_9GTFmAKwpQTvHf3G5OM4vOT1EWolWaOZswM/edit" 
            ,website: "https://github.com/gschultz49/klicky"
        }
    }
}

const sections = ["role","overview","problem","solution","design","develop","figma","website"]
const allCases = ["Stellar","Portfolio Website","MEDP285 Website","Stephen King Villain API","An Unlucky Day","Feel ReLeaf","Klicky"]

function setData(){
    // BackgroundImage
    if(allCases.indexOf(project) %2 == 0){
        $(".topContainer").css("backgroundImage", "url(../../00_assets/svgs/detsign1.svg)");
    }else{
        $(".topContainer").css("backgroundImage", "url(../../00_assets/svgs/detsign3.svg)");
    }

    //Title
    $("#projectTitle").text(`Judy's Project - ${project}`);
    $("#projectHead").text(project);

    // Contents
    const projectCase = projectData[project];
    for(let info of sections){
        if(info == "figma" || info == "website"){
            if(projectCase.links[info] == "none"){      //No available link is provided
                $(`#${info}Arrow`).css("display","none");
                $(`#visit${info}`).css("pointer-events","none");
            }
            if(projectCase.images[info] == "none"){     //No available image is provided
                $(`#${info}`).css("display","none");
            }else{
                $(`#${info}`).attr("src",projectCase.images[info]);
                $(`#visit${info}`).attr("href",projectCase.links[info]);

                if(project == "Feel ReLeaf" || project == "Klicky"){          //presentation in one case study
                    $(`#visitfigma`).attr("title","Visit Presentation");
                    if(project == "Klicky"){
                        $(`#visitwebsite`).attr("title","Visit Github");
                    }
                }
                
            }
        }else{
            $(`#${info}`).html(projectCase[info]);
        }
        //Conditional Stories
        if(info == "problem" && $(`#${info}`).html() == "none"){
            $(".projectPurpose").css("display", "none"); 
        }
    }

    //Next
    let nextCase, prevCase;
    if(allCases.indexOf(project)+1 >= allCases.length){
        nextCase = allCases[0]
    }
    else{
        nextCase =  allCases[allCases.indexOf(project)+1];
    }
    if(allCases.indexOf(project) == 0){
        prevCase = allCases[allCases.length-1]
    }else{
        prevCase =  allCases[allCases.indexOf(project)-1];
    }
    $("#nextCase").html(`See Next &#8640; <span>${nextCase}</span>`)
    $("#prevCase").html(`See Previous &#8636; <span>${prevCase}</span>`)
    $("#nextCase").click(() => {
        sessionStorage.clear()
        sessionStorage.setItem("project", nextCase)
        window.location.href = "./index.html";
    });
    $("#prevCase").click(() => {
        sessionStorage.clear()
        sessionStorage.setItem("project", prevCase)
        window.location.href = "./index.html";
    });
}

setData();

// navbar


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