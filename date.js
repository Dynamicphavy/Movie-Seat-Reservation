const now = new Date();
const weekDay = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
const day = now.getDate();

// Update the HTML elements
document.getElementById("weekday").textContent = weekDay;
document.getElementById("day").textContent = day;