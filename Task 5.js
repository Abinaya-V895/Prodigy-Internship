// Your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

// DOM elements
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');
const getWeatherBtn = document.getElementById('get-weather-btn');

// Function to fetch weather data from the API
async function getWeather(city) {
  try {
    // Clear any previous error or data
    errorMessage.textContent = '';
    weatherInfo.style.display = 'none';

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === '404') {
      throw new Error('City not found');
    }

    // Extracting necessary data from the API response
    const { name, main, weather, wind } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const humidity = main.humidity;
    const windSpeed = wind.speed;

    // Displaying weather data on the webpage
    document.getElementById('location').textContent = `Location: ${name}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} m/s`;

    // Display the weather info section
    weatherInfo.style.display = 'block';

  } catch (error) {
    // Displaying error if the city is not found or there is an issue with the API
    weatherInfo.style.display = 'none';
    errorMessage.textContent = error.message;
  }
}

// Event listener for the "Get Weather" button
getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (city) {
    getWeather(city);
  } else {
    errorMessage.textContent = 'Please enter a city name.';
  }
});
