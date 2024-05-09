function updateTime() {

let today = new Date();
let thisMonth = today.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let thisDate = today.getDate();
let thisWeekday = today.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let thisYear = today.getFullYear();

let dateElem = document.getElementById("date");

dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;

let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();
  

if(thisSecond < 10) {
  thisSecond = "0" + thisSecond;
}
  
if(thisMinute < 10) {
  thisMinute = "0" + thisMinute;
}
  
if(thisHour < 10) {
  thisHour = "0" + thisHour;
}
  
if(thisHour > 12) {
  thisHour = thisHour - 12;
}

let timeElem = document.getElementById("time");
timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
  
}

setInterval(updateTime, 1000);