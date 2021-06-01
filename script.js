let btn = document.getElementsByClassName("btn");
let erroricon = document.getElementsByClassName("alert-icon-container");
let input = document.getElementsByClassName("email-input");
let alerttext = document.getElementsByClassName("alert-text");
let alertcontanier = document.getElementsByClassName("alert-text-container");
let form = document.getElementsByClassName("form");

form[0].addEventListener("submit", (e) => {
  if (e.target[0].checkValidity()) {
    hideAlerts();
  }
});
input[0].addEventListener("invalid", (e) => {
  e.preventDefault();
  alerttext[0].innerText = e.target.validationMessage;
  alertcontanier[0].style.opacity = 1;
  erroricon[0].style.opacity = 1;
  console.log("worked");
});
btn[0].addEventListener("mouseover", () => {
  btn[0].style.opacity = 0.7;
});
btn[0].addEventListener("mouseout", () => {
  btn[0].style.opacity = 1;
});
let hideAlerts = function () {
  alertcontanier[0].style.opacity = 0;
  erroricon[0].style.opacity = 0;
};
hideAlerts();
alertcontanier[0].style.transition = "opacity 0.2s ease-in";
erroricon[0].style.transition = "opacity 0.2s ease-in";
btn[0].style.transition = "opacity 0.3s ease-out";
let showAlerts = function () {
  alertcontanier[0].style.opacity = 1;
  erroricon[0].style.opacity = 1;
};
