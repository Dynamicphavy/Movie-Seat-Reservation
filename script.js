let date = []
let title =[]

async function Datetime() {
    try {
        const response = await fetch('date.json');
        const data = await response.json();
        renderDate(date);
    } catch (err) {
        console.error("Error, not loading date", err);
    }
}