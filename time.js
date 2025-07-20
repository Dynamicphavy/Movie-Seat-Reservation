let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");

let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();