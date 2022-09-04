let countDownDate = new Date("oct 25, 2022 20:30:00").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    // window.location.href = "theEnd.html";
  }
}, 1000);
// ----------------------loader---------
let loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});
let cap = document.querySelector(".fa-graduation-cap");
let video = document.querySelector("video");
cap.addEventListener("click", function () {
  video.style.opacity = "1";
  video.style.zIndex = "5";
});
cap.addEventListener("click", function () {
  video.play();
});
