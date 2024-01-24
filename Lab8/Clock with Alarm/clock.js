var hour = document.getElementsByClassName("hours")[0];
var min = document.getElementsByClassName("minutes")[0];
var sec = document.getElementsByClassName("seconds")[0];
var days = document.getElementsByClassName("day");

setInterval(updateTime, 1000);
function updateTime() {
  var date = new Date();

  hour.textContent = date.getHours();
  min.textContent = date.getMinutes();
  sec.textContent = date.getSeconds();

  days[date.getDay()].style.color = "black";
}

var setButton = document.getElementsByClassName("set")[0];
setButton.addEventListener("click", setAlarm);
var timeOutId;

var clearButton = document.getElementsByClassName("clear")[0];
clearButton.addEventListener("click", clearAlarm);

function setAlarm() {
  var hours = document.getElementsByClassName("alarmHour")[0];
  var minutes = document.getElementsByClassName("alarmMin")[0];
  var seconds = document.getElementsByClassName("alarmSec")[0];

  var milliSeconds =
    (hours.value * 60 * 60 + minutes.value * 60 + seconds.value) * 1000;
  console.log(milliSeconds);
  timeOutId = setTimeout(function () {
    alert("ALARM--ALARM");
  }, milliSeconds);
}

function clearAlarm() {
  clearTimeout(timeOutId);
}
