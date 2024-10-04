# Weather API Fetch Application
This is a simple web application that fetches and displays current weather data from a public API based on user input (city name). The project is built using HTML, CSS, and JavaScript, and it uses the OpenWeatherMap API to retrieve real-time weather information.

# Features
* Weather Search by City: Enter any city name, and the app fetches the current weather conditions, including temperature, humidity, wind speed, and weather description.
* Dynamic Weather Icons: The app displays weather-related icons corresponding to the current weather conditions (e.g., sunny, rainy, cloudy).
* Responsive Design: The layout adapts to different screen sizes, ensuring an optimal user experience across desktops, tablets, and mobile devices.
* Error Handling: Handles errors gracefully, such as when a city name is invalid or the API request fails.

# Demo
Try out the live version of the weather app here (https://glozog.github.io/weather-api-fetch/).

# Technologies Used
* HTML: For structuring the app's content.
* CSS: For styling the interface and making it responsive.
* JavaScript: Handles fetching data from the Weather API, updating the DOM, and managing user interactions.
* OpenWeatherMap API: Provides real-time weather data based on city names.

# Getting Started
To run this project on your local machine, follow these steps:

* Clone the repository:
git clone https://github.com/your-username/weather-api-fetch.git
* Navigate to the project directory:
cd weather-api-fetch

# Create an account on OpenWeatherMap and generate your free API key.

* Add your API key:

* In the script.js file, replace the placeholder with your own API key:
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

*Open index.html in your browser:
Double-click the index.html file or open it in your browser using your preferred method.

* Start searching for weather information!

# API Reference
The app uses the OpenWeatherMap API to retrieve real-time weather data. To use the API, you need to:

* Sign up at OpenWeatherMap.
*Generate your free API key.
* Replace the placeholder in the script.js file with your actual API key.

# Example API request:
https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=YOUR_API_KEY

# Future Enhancements
* Add Forecasting: Expand the app to display a 5-day weather forecast.
* Geolocation: Automatically fetch the weather for the user's current location using the browser’s geolocation API.
* Dark Mode: Add a toggle for dark mode to enhance the user experience.
* Multiple Units: Allow users to switch between Celsius and Fahrenheit.

# Contributions
Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository, make your changes, and submit a pull request.
