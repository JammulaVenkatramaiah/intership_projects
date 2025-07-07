// Get references to the DOM elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');

// IMPORTANT: Replace 'YOUR_API_KEY_HERE' with your actual API key from OpenWeatherMap
// You can get a free API key by signing up at: https://openweathermap.org/api
const API_KEY = '18a8bf28e5a98dd44b2fdcaad083ea53';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetches weather data for a given city from the OpenWeatherMap API.
 * Displays the weather information or an error message.
 */
async function fetchWeatherData() {
    const city = cityInput.value.trim(); // Get input value and remove leading/trailing whitespace

    // Validate if city input is empty
    if (!city) {
        errorMessage.textContent = 'Please enter a city name.';
        weatherInfo.innerHTML = ''; // Clear previous weather info
        return;
    }

    // Clear previous messages and show loading state
    errorMessage.textContent = '';
    weatherInfo.innerHTML = '<p>Loading weather data...</p>';

    try {
        // Construct the API URL with city, API key, and units (metric for Celsius)
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            // Attempt to parse error message from the API response
            const errorData = await response.json();
            // Throw an error with a more specific message if available
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response body into a JavaScript object
        const data = await response.json();

        // Extract relevant weather data
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed; // Wind speed in m/s (metric units)

        // Update the weatherInfo div with the fetched data
        weatherInfo.innerHTML = `
            <h2 class="text-gray-900">${cityName}</h2>
            <p class="temperature">${temperature}°C</p>
            <p class="capitalize">${description}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;

    } catch (error) {
        // Handle any errors that occurred during the fetch operation or data processing
        console.error("Failed to fetch weather:", error);
        weatherInfo.innerHTML = ''; // Clear loading message
        // Display a user-friendly error message
        errorMessage.textContent = `Could not get weather for "${city}". Error: ${error.message}. Please try again.`;
    }
}

// Add event listener to the "Get Weather" button
getWeatherBtn.addEventListener('click', fetchWeatherData);

// Allow fetching weather by pressing Enter key in the input field
cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchWeatherData();
    }
});

// Optional: Fetch weather for a default city on page load
// window.onload = () => {
//     cityInput.value = 'London'; // Set a default city
//     fetchWeatherData();
// };
