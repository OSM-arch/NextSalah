async function PrayerTimes(city, country, method) {   

    try {
        const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`);
        return response.data.data.timings;
        
    }catch(error) {
        console.log("Error getting day prayer times: ", error);
    }

}

export async function getPrayerTimes(city, country, method) {

    try {
        const result = await PrayerTimes(city, country, method);
        return result;
    } catch (error) {
        console.error("Error setting day prayer: ", error);
    }

}


export async function MonthPrayerTime(city, country, method, monthYear) {

    const month = monthYear[0];
    const year = monthYear[1];
      
    try {
        const response = await axios.get(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=${method}&month=${month}&year=${year}`);
        return response.data.data;
        
    }catch(error) {
        console.log("Error getting Prayer times: ", error);
    }
}

export async function getMonthPrayerTime(city, country, method, monthYear) {

    try {
        const result = await MonthPrayerTime(city, country, method, monthYear);
        return result;
    } catch (error) {
        console.error("Error setting prayer times: ", error);
    }

}