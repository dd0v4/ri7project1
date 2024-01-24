const boutonmode = document.getElementById("boutonmode");
const submitbut = document.getElementById("submitbut");
const body = document.querySelector("body");
const titre = document.getElementById("titre"); 
const titrehtml = document.getElementById("titrehtml");
const titrecss = document.getElementById("titrecss");
const titrejs = document.getElementById("titrejs");
const titrecontact = document.getElementById("titrecontact");
const liens = document.getElementById("liens");
let whitemode = localStorage.getItem("white-mode") || "inactif";
var elements = document.querySelectorAll('h2, h3, h4, p, div');


function SwapClass(elementArray) {
    for (var i = 0; i < elementArray.length; i++) {
        switch (true) {
            case elementArray[i].classList.contains("images"):
                elementArray[i].classList.remove("images");
                elementArray[i].classList.add("imageswhite");
                break;
                
            case elementArray[i].classList.contains("coordonnees"):
                elementArray[i].classList.remove("coordonnees");
                elementArray[i].classList.add("white");
                break;
                
            case elementArray[i].classList.contains("message"):
                elementArray[i].classList.remove("message")
                elementArray[i].classList.add("white")
                break;
    
            default:
                elementArray[i].classList.add('white');
                break;
        }
    }
    
}
function RemoveClass(elementArray){
    for (var i = 0; i < elementArray.length; i++) {
        elementArray[i].classList.remove('white');
    }
}

const activerWhiteMode=() =>{
    SwapClass(elements);
    liens.setAttribute("id", "lienswhite");
    titre.setAttribute("id", "titrewhite");
    titrecontact.setAttribute("id", "titrecontactwhite");
    titrehtml.setAttribute("id", "titrehtmlwhite");
    titrecss.setAttribute("id", "titrecsswhite");
    titrejs.setAttribute("id", "titrejswhite");
    body.classList.add("white-mode-theme");
    localStorage.setItem("white-mode", "actif")
}
const desactiverWhiteMode=() =>{
    body.classList.remove("white-mode-theme");
    localStorage.setItem("white-mode", "inactif")
}

boutonmode.onclick = function(){
    whitemode = localStorage.getItem("white-mode");
    if(whitemode === "inactif"){
        activerWhiteMode();
    } else {
        desactiverWhiteMode();
        document.getElementById("lienswhite").setAttribute("id", "liens");
        document.getElementById("titrewhite").setAttribute("id", "titre");
        document.getElementById("titrehtmlwhite").setAttribute("id", "titrehtml");
        document.getElementById("titrecsswhite").setAttribute("id", "titrecss");
        document.getElementById("titrejswhite").setAttribute("id", "titrejs");
        document.getElementById("titrecontactwhite").setAttribute("id", "titrecontact");
        RemoveClass(elements);
    }
}
submitbut.onclick = function(){
    alert("Votre message a bien été envoyé, nous vous reconterons prochainement.");
}