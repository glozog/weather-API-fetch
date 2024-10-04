

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "9abf0e706b05104a838dd140d39ac2b1";

weatherForm.addEventListener("submit", getWeather);
cityInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getWeather(event);
    }
});

async function getWeather(event) {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.log(error.message);
            displayError("City not found. Please try again.");
        }
    } else {
        displayError("Please enter a city name.");
    }
}

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }],
    } = data;

    card.innerHTML = `
        <h2 class="cityDisplay">${city}</h2>
        <p class="tempDisplay">${temp.toFixed(1)}°C</p>
        <p class="humidityDisplay">Humidity: ${humidity}%</p>
        <p class="descDisplay">${description}</p>
        <p class="weatherEmoji">${getWeatherEmoji(id)}</p>
    `;

    card.style.display = "block";
}

function getWeatherEmoji(weatherId) {
    switch(true){
        case weatherId >= 200 && weatherId < 300:
            return "⛈️";
        case weatherId >= 300 && weatherId < 400:
            return "🌧️";
        case weatherId >= 500 && weatherId < 600:
            return "🌦️";
        case weatherId >= 600 && weatherId < 700:
                return "🌨️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫️";
        case weatherId === 800:
                return "☀️";
        case weatherId >= 801 && weatherId < 810:
            return "⛅️";
        case weatherId >= 900 && weatherId < 1000:
            return "🌩️";
        default:
            return "❓";
    }
}

function displayError(message) {
    card.innerHTML = `<p class="errorDisplay">${message}</p>`;
    card.style.display = "block";
}