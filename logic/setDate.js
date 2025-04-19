export function setDate() {
    const date = new Date();
    document.querySelector('.date').textContent = `${weekDay(date.getDay())}, ${monthDay(date.getMonth())}, ${date.getDate()}, ${date.getFullYear()}`;
    document.querySelector('.month-Year').textContent = `${monthDay(date.getMonth())} ${date.getFullYear()}`;

    return [months.indexOf(monthDay(date.getMonth()))+1, date.getFullYear(), date.getMonth()+1];
}

function weekDay(day) {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return weekday[day];
}

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function monthDay(month) {
    return months[month];
}