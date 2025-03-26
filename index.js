let alerting = document.getElementById("alertButton");
let log = document.getElementById("logButton");
let blue = document.getElementById("blueButton");
let white = document.getElementById("whiteButton");

const date = new Date();
const hours = date.getHours();
const mins = date.getMinutes();

let timeOutput = `The time is ${hours}:${mins}`
let time = document.getElementById("time").innerText = timeOutput;

alerting.addEventListener("click", function() {
    alert("stop clicking the button")
    // console.log("upto g");
});

log.addEventListener("click", function() {
    console.log(timeOutput);
});

const buttons = document.querySelectorAll(".changeColor");

blue.addEventListener("click", function() {
    buttons.forEach(function(element) {
        element.style.backgroundColor = "blue";
    })
});

white.addEventListener("click", function() {
    buttons.forEach(function(element) {
        element.style.backgroundColor = "white";
    })
});

// console.log(hours);
// console.log(mins);
// console.log(timeOutput);