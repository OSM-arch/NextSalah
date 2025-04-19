const APIkey = 'ab02c54d46c84248b53f11ab1f196d3f';

async function Country() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        alert('Please enter a city');
        return;
    }
    
    try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${APIkey}`);
        return response.data.results[0].components.country;
    }catch(error) {
        console.log("Error getting country: ", error);
    }
}

export async function getCountry() {
    try {
        const result = await Country();
        return result;
    } catch (error) {
        console.error("Error setting country: ", error);
    }
}