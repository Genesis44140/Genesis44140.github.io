let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/if-monster-2913115_88812.webp") {
    myImage.setAttribute("src", "images/98b8896b4551a60a2718056f71890151.jpg");
  } else {
    myImage.setAttribute("src", "images/if-monster-2913115_88812.webp");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Les dragons sont cools, " + myName;
}
if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Les dragons sont cools, " + storedName;
}
myButton.addEventListener("click", function () {
  setUserName();
});
