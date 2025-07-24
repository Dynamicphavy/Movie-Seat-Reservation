let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");

let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();

// Date
const today = new Date();
const format = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
document.getElementById("date").textContent = format;