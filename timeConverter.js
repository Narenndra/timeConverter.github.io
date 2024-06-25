let hoursInputEle = document.getElementById("hoursInput");
let minutesInputEle = document.getElementById("minutesInput");

let errorMsgEle = document.getElementById("errorMsg");
let timeInSecEle = document.getElementById("timeInSeconds");
let convertBtnEle = document.getElementById("convertBtn");


function apply() {
    let hours = hoursInputEle.value;
    let minutes = minutesInputEle.value;
    if ((hours !== "") && (minutes !== "")) {
        let seconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
        timeInSecEle.textContent = seconds + "s";
        timeInSecEle.classList.add("timeInSec");
        errorMsgEle.textContent = "";
    } else if (hours === "") {
        errorMsgEle.textContent = "please enter a valid number of hours";
        timeInSecEle.textContent = "";
        timeInSecEle.classList.remove("timeInSec");
    } else if (minutes === "") {
        errorMsgEle.textContent = "please enter a valid number of minutes";
        timeInSecEle.textContent = "";
        timeInSecEle.classList.remove("timeInSec");
    }
}

convertBtnEle.addEventListener("click", apply);