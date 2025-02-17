window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

// Artwork Details
const allDetails = [
  details1 = {
    title: "Dreamer",
    software: "Adobe Photoshop",
    date: "June 2021",
    description: "The piece 'Dreamer' was one of the first works I created when I transitioned into a digital artist. Needless to say, I am still an amateur when it comes to digital illustrations and was very ambitious in my practice pieces. I call this work the 'Dreamer'. After all, like the subject in the artwork, I am weary of how sometimes my enthusiastic nature hinders me from actual progress because I restrict myself to small irrelevant details. As much as this drawing was a practice, it was also a reflection of myself and from it, I was able to grow both mentally and artistically. In this piece, I used a very muted color palette giving off solemn emotions. The distressed subject with the skewed rubble in the background compliments the atmosphere. The illuminating golden hair shares the emotional turmoil the subject is feeling, almost as if representing their yearning for freedom with it blowing freely in the air."
  },
  details2 = {
    title: "Friends",
    software: "Adobe Photoshop",
    date: "September 2021",
    description: "The illustration 'Friends' was a study on emotion and reflected light. The main subject is drawn laying on her side facing an illuminated lock screen with the notification of 'no new messages' signaling that they are waiting for some sort of response or update. The sorrowful facial expression paired with the dull hues conveys to the audience its dreary atmosphere and foreboding tone. The light that is emanating from the phone's screen is hyper-highlighted throughout the subject because of the dark and gloomy surroundings. The face and pillow are especially taken into consideration due to its closer distance from the light source."
  },
  details3 = {
    title: "Revelation Day",
    software: "Adobe Photoshop",
    date: "August 2021",
    description: "The artwork 'Revelation Day' is fan art of the popular webtoon 'Remarried Empress'. The subject in the piece is the character named 'Navier', her most identifying features being her stern demeanor, emerald green eyes, and lustrous golden hair fit for an empress of two nations. Her signature appearance is red velvet ball gowns adorned with heavy flamboyant jewelry and of course, a golden crown to represent her royalty. With all these elements in mind, I composed the illustration in a perspective where it seems as though she is looking down from the high rank she is in along with a fitting expression to show how sophisticated and regal she is. In the portrait, her eyes are the only green element within the piece, this grabs the viewer's attention to it first. Attached to the red gown is a fluffy of white fur akin to those on a royal cape. Additionally, her body and hair are adorned with pearls and golden red gems to further enhance her unreachable status. Last but not least, the background is designed to sort of abstractly to not bring away any attention from the main subject."
  },
  details4 = {
    title: "New Year Motivation",
    software: "Adobe Illustrator",
    date: "December 2021",
    description: "I was commissioned by a relative to design a chinese new year poster. This poster would be posted on doors outside the building to set a happy mood for those upon entering or passing by. With this in mind, I made sure to design this poster to be as eye-catching as possible. I wanted the poster to resemble as much as possible the loud and bright celebrations of Chinese New Year. For this, I designed a large chinese firecracker. The light and dramatic perspective implemented in the design is made to draw the audience into the piece and immerse them excitement for the new year. The firecracker and golden ingot are developed with depth for a smooth appearance. The text’s drop shadow is to as much as possible match to the drawing style, as to not make the composition too awkward. The two toned background enhances and directs the attention towards the text and explosion occurring on the ride side."
  },
  details5 = {
    title: "The Perfect Daisy",
    software: "Adobe Illustrator",
    date: "July 2022",
    description: "These illustrations were designed for Marc Jacobs Back to School Contest submission. The client offered students to design both or one of the products between “Daisy” and “Perfect”. The purpose of having students create the design was to fulfill their vision of having the new generation incorporate younger audiences’ style and definition of “what makes you you” within their product. Initially I went with just one product having to focus more on accentuating the abstract meaning of “perfect”. The way I interpreted this topic was to redefine the word to match a more modern preference-abstract. Later I decided to challenge myself to compose both the offered products to one coherent design. For the daisy perfume, I was more direct. While maintaining the first perfume’s style, I implemented the product’s ingredients while giving it a more spring, honey, flowery feel within. Additionally, knowing that the would be chosen design would be advertised and used within a mall and social media, I took the liberty to study their seasonal color palette for their media posts and decided to implement it to maintain the same consistency."
  },
  details6 = {
    title: "DragonFruit",
    software: "Adobe Illustrator",
    date: "February 2022",
    description: "This design was created for the informative purpose of advertising a healthy fruit while highlighting it’s positive benefits for people. By promoting and informing more people of these healthier choices, I decided to design this poster with more vibrantly alluring elements. The pastel palette brings the audience’s to a more positive mood. The addition of the sakura like leaves near the foreground brings depth to the poster and leads the audience to the singular dragon fruit near the center. The green accent on the dragonfruit brings the whole piece together while adding a pop of a complementary color. The simple yet complex design with the addition of careful placement of hierarchy of text creates for a captivating piece."
  },
  details7 = {
    title: "Granted",
    software: "Figma",
    date: "March 2023",
    link: "https://www.figma.com/file/M9MvJdaK19Hvd9Vbf0Zown/Judy-Zhang-Figma-Design?type=design&node-id=304-80&mode=design&t=WUH5InBS7fVuw8cu-0",
    description: "The 'Granted' design was meant to stimulate the transaction between charities and sponsors. This piece was illustrated with a very minimalistic aesthetic in mind. The reason for this is to represent the humbleness of its sponsors and their charity work. The goal behind this practice piece was to obtain and maintain legitimate charities all in one website. In retrospect, this website would over time generate enough money to provide more substantial enough funds to the charities themselves. The concept of this website is unique in its way. The introduction to the webpage is unlike others, whereas the scroll wheel will be inverted and viewers see through the perspective of a paper airplane sent from an envelope."
  },  
  details8 = {
    title: "Jolly",
    software: "Figma",
    date: "June 2022",
    link: "https://www.figma.com/file/M9MvJdaK19Hvd9Vbf0Zown/Judy-Zhang-Figma-Design?type=design&node-id=0-1&mode=design&t=lZg2p9PiVPNvJovM-0",
    description: "The 'Jolly' design was created for a potential family start-up company temporarily named 'Jolly'.  The layout has yet to be finalized, however, it incorporates a homepage, game selection, game demo page, shop site, and socials page. The color palette applies a warm pastel hue to the website bringing forth a cozy and comfortable visualization to the audience. This color scheme is designed with smooth transitions between each section. These aspects give the illusion of a more modern yet intriguing aura. Additionally, animated backgrounds and images are implemented within the format for a more active interaction for the viewers."
  },
  details9 = {
    title: "Portfolio Slides",
    software: "Google Slides",
    date: "N/A",
    link: "https://docs.google.com/presentation/d/1PtG3YzIniPluCiE7PbIvrOfJ0qA8bfIwLWQxtRnlXUc/edit?usp=sharing",
    description: "More Showcases"
  },
]

var enLargement = document.getElementById("enLarge")
var closing = document.getElementById("closeThis")
var images = document.getElementsByClassName("piece")
var showThis = document.getElementById("thisOne")
var whatThis = document.getElementById("details")
var thisCalled = document.getElementById("thisCalled")

// Media Responsive
const webSize = window.matchMedia("(max-width: 1023px)")

// conditional locks
var titleAppeared = false

function titleAppearance(){
  if (titleAppeared === true){
    thisCalled.style.animation = "none"
    thisCalled.style.opacity = "100%"
  }
  else{
    thisCalled.style.animation = "seeMore .5s forwards"
    thisCalled.style.opacity = "0%"
  }
}

function closeEnlargement(){
  enLargement.style.display = "none"
  document.body.style.overflowY = "auto"
  titleAppeared = false
  titleAppearance()
}

function openEnlargement(){
  enLargement.style.display = "block"
}


function linkNeeded(number){
  if (number >= 6){
    whatThis.innerHTML += `<br /><span style="font-weight: bold;">Figma Link:</span> <a style="cursor:pointer;" onmouseover="figmaLink(this)" onmouseout="noFigmaLink(this)" href=${allDetails[number].link} target="_blank">View ${allDetails[number].title}.Design</a>`
  }
}

function figmaLink(link){
  link.style.transition = "text-decoration .3s, color .3s"
  link.style.textDecoration = "underline #b9ade6 2px"
  link.style.color = "#b9ade6"
}

function noFigmaLink(link){
  link.style.transition = "text-decoration .3s, color .3s"
  link.style.color = "whitesmoke"
  link.style.textDecoration = "none"
}

function alignDetails(number, webSize){
  titleAppearance()
  if (webSize.matches){
    whatThis.innerHTML = `<h2>Title: ${allDetails[number].title}</h2><br />`
  }
  else{
    whatThis.innerHTML = `<h2>Details</h2><br />`
  }
  thisCalled.innerHTML = `Title: ${allDetails[number].title}`
  whatThis.innerHTML += `<span style="font-weight: bold;">Software Used:</span> ${allDetails[number].software} <br /> <span style="font-weight: bold;">Date Published:</span> ${allDetails[number].date}`
  linkNeeded(number)
  whatThis.innerHTML += `<h4>Description:</h4> ${allDetails[number].description}`
  titleAppeared = true
}

closing.addEventListener("click", closeEnlargement)

var identity = 0
for (let tag of images){
  tag.value = identity
  identity++
}

for (let piece of images){
  piece.children[0].addEventListener("click", function(){
    document.body.style.overflowY = "hidden"
    openEnlargement()
    showThis.src = this.src
    alignDetails(piece.value, webSize)

    webSize.addEventListener("change", () => {
      alignDetails(piece.value, webSize)
    })
    
  })
}