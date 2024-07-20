
// select HTML elements in the document
const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=5.63&lon=0.19&appid=a98535084e6aa109ae5bfc0a494f74d7&units=imperial";

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)} mph`;

    const temp = weatherData.main.temp.toFixed(0);
    const windS = weatherData.wind.speed.toFixed(1);

    if (temp <= 50 && windS > 3) {
        const windChill_f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windS, 0.16)) + (0.4275 * temp * Math.pow(windS, 0.16));
        windChill.innerText = `${Math.round(windChill_f)}&deg;F`;
    } else {
        windChill.innerText = "N/A";
    }
}

apiFetch(url);