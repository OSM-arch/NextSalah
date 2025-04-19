// SET DATE
import { setDate } from "./setDate.js";
let monthYear = [];

document.addEventListener('DOMContentLoaded', () => {
    monthYear = setDate();
})

// DISPLAY DATE
let city = '';
function displayCity() {
    const cityInput = document.getElementById('cityInput').value;
    const cityDOM = document.querySelector('.city');

    city = cityInput.trim().slice(0, 1).toUpperCase() + cityInput.trim().slice(1, cityInput.length+1).toLowerCase();

    cityDOM.textContent = city;
    return city;
}





// GET COUNTRY
import { getCountry } from "./get-country.js";
let country = '';

document.querySelector('.search-icon-container').addEventListener('click', async () => {
    method = getMethod();
    
    country = await getCountry();

    city = displayCity();

    prayersTimeObject = await getPrayerTimes(city, country, method);
    displayPrayerTimes();

    timingsArray = await getMonthPrayerTime(city, country, method, monthYear);
    displayMonthPrayersTable();
});

// GET CALCULATION METHOD
import { getMethod } from "./get-method.js";

let method = '';
document.getElementById('calculationMethod').addEventListener('change', async () => {
    method = getMethod();

    country = await getCountry();

    city = displayCity();

    prayersTimeObject = await getPrayerTimes(city, country, method);
    displayPrayerTimes();

    timingsArray = await getMonthPrayerTime(city, country, method, monthYear);
    displayMonthPrayersTable();
});




// GET PRAYER TIMES
import { getPrayerTimes } from "./get-prayer-times.js";
let prayersTimeObject = {};
const prayers = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

// DISPLAY PRAYER TIMES
function displayPrayerTimes() {

    const spans = document.querySelectorAll('.salat-time');

    for (let prayer of prayers) {

        for (let prayerTimeObject in prayersTimeObject) {
            if (prayerTimeObject === prayer)
                spans[prayers.indexOf(prayer)].textContent = prayersTimeObject[prayer];
        }
    }
}




// DISPLAY TABLE PRAYERS 
import { getMonthPrayerTime } from "./get-prayer-times.js";

let timingsArray = [];
async function displayMonthPrayersTable() {
    document.querySelector('tbody').innerHTML = '';
    
    for (let i = 0; i < timingsArray.length; i++) {
        const tr = document.createElement('tr');

        // td n1 for day/month/dayNumber
        const td1 = document.createElement('td');
        td1.textContent = timingsArray[i].date.readable;

        tr.appendChild(td1);

        // td n2 to n6 to prayerTime
        for (let prayer of prayers) {

            for (let timing in timingsArray[i].timings) {

                if (timing === prayer) {
                    const td = document.createElement('td');
                    const time = timingsArray[i].timings[prayer].split(' ');
                    td.textContent = time[0];

                    if (monthYear[2] === Number(timingsArray[i].date.gregorian.day)) {
                        td.className = 'td-active';
                        tr.className = 'tr-active';
                    }

                    tr.appendChild(td);
                }

            }

        }
        
        document.querySelector('tbody').appendChild(tr);

    }

}