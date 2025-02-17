const sender = document.getElementById("enteremail")
const emailmessage = document.getElementById("message")
const sendButton = document.getElementById("sendbutton")
const goButton = document.getElementById("gobutton")

function copytext(){
    var messagecopy = document.getElementById("message")
    messagecopy.select()
    messagecopy.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(`To: judyz1594@gmail.com\n${messagecopy.value}`)
}

function aftersent(){
    emailmessage.style.textAlign = "center"
    emailmessage.value = "Message Copied!"
    setTimeout(() =>{
        emailmessage.style.textAlign = "left"
        emailmessage.value = ""
    }, 1500)
    // alert("Whoops! The email function is still under construction.")
}

function buttonSwitch(gone, come){
    if (come.style.display === "none"){
        come.style.display = "block"
        gone.style.display = "none"
    } else{
        gone.style.display = "block"
        come.style.display = "none"
    }
}

sendButton.addEventListener("click", () =>{
    copytext()
    aftersent()
    buttonSwitch(goButton, sendButton)
})

goButton.addEventListener("click", () =>{
    buttonSwitch(sendButton, goButton)
})

// switching displays
const email = document.getElementById("emailChoice")
const linkedin = document.getElementById("linkedinChoice")
const github = document.getElementById("githubChoice")

const contact = ["email", "linkedin", "github"]

const slide = {"right": ["linkedinSub1", "githubSub2", "emailSub2"], "left": ["githubSub1", "emailSub1", "linkedInSub2"]}
// console.log(slide.right)

// for (let two = 0; two < 2; two++){
//     var which = slide.right
//     for (sides of which){
//         console.log(sides)
//     }
//     which = slide.left
// }

function getElement(id){
    return document.getElementById(id) 
}

for (let choice of contact){
    for (let sub = 0; sub < 2; sub++){
        getElement(`${choice + 'Sub' + [sub+1]}`).addEventListener("click", () => {
            alterDisplays(choice, sub+1)   //linkedin
            // animatedSeq(this, choice, sub+1)
        })
    }
}

function animatedSeq(goneSection, incomingSection, directing){
    for (sides of slide.left){
        if (`${incomingSection+'Sub'+directing}` === sides){
            goawayStyle = "fadeout .3s forwards"
            moveinStyle = "fadein .3s forwards"
        }
        else{
            goawayStyle = "fadeout .3s forwards"
            moveinStyle = "fadein .3s forwards"
        }
    }
    getElement(`${goneSection + 'Choice'}`).style.animation = goawayStyle
    getElement(`${incomingSection + 'Choice'}`).style.animation = moveinStyle
}

function alterDisplays(section, num){
    for (let each of contact){
        // if (getElement(`${each + 'Choice'}`).style.display === "flex"){
        //     animatedSeq(each, section, num)
        // }
        // else{
            getElement(`${each + 'Choice'}`).style.display = "none"
        // }
    }
    getElement(`${section + 'Choice'}`).style.display = "flex"
}

// "slide show >:V"

// var left = document.getElementById("reachOptLeft")
// var center = document.getElementById("reachOptCenter")
// var right = document.getElementById("reachOptRight")


// LIST ORDER::     [0] github      [1] email     [1] linkedIn
//INNER ORDER::     [0] Wrapper     [1] Sub       [1] Display Section
// const contact = {"github": ["choiceGithub","gitSub","githubSection"], "email": ["choiceEmail","emailSub","emailSection"], "linkedin": ["choiceLinkedIn","linkSub","linkedInSection"]}

// function getElement(id){
//     access = []
//     for (let tag = 0; tag < 3; tag++){
//         access.push(document.getElementById(id[tag]))
//     }
//     return access
// }

// const github = getElement(contact["github"])
// const email = getElement(contact["email"])
// const linkedin = getElement(contact["linkedin"])

// var identify = 0
// for (let tag in contact){
//     getElement(contact[tag])[1].value = identify
//     identify++
//     ...HIDE => console.log(`${contact[tag][1]} ${getElement(contact[tag])[1].value}`)
// }

// function swapContent(section, place){
//     const div = section
//     const papers = place
//     const clone = div.cloneNode(true)

//     while(papers.firstChild) papers.firstChild.remove()

//     papers.appendChild(clone)
// }

// function others(tagValue){
//     if (tagValue.value === 0){
//         ...HIDE =>  left.innerHTML = linkedin[1].innerHTML
//         ...HIDE =>  right.innerHTML = email[1].innerHTML
//         swapContent(linkedin[0], left)
//         swapContent(github[0], center)
//         swapContent(email[0], right)
//     } else if (tagValue === 1){
//         ...HIDE => left.innerHTML = github[1].innerHTML
//         ...HIDE =>  right.innerHTML = linkedin[1].innerHTML
//         swapContent(github[0], left)
//         swapContent(email[0], center)
//         swapContent(linkedin[0], right)
//     } else{
//         ...HIDE =>  left.innerHTML = email[1].innerHTML
//         ...HIDE =>  right.innerHTML = github[1].innerHTML
//         swapContent(email[0], left)
//         swapContent(linkedin[0], center)
//         swapContent(github[0], right)
//     }
//     if (email[1].value === 1){
//         console.log("woah")
//     }
// }

// function choice(tagValue){
//     for (let subs in contact){
//         var section = getElement(contact[subs]) 
//         if (section[1].value === tagValue.value){
//             section[1].style.display = "none"
//             section[2].style.display = "block"
//             ...HIDE =>  swapContent(section[0], center)
//         } else{
//             section[1].style.display = "block"
//             section[2].style.display = "none"
//             ...HIDE =>  others(tagValue)
//         }
//         others(tagValue)
//     }
// }

// for (let each in contact){
//     getElement(contact[each])[1].addEventListener("click", () => {
//         choice(getElement(contact[each])[1])
//     })
// }

// console.log(email[1].value)
// choice(email[1])
