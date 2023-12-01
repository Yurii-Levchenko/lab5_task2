function getWeatherData() {
    const cityName = document.getElementById("city").value;  // Місто, для якого отримуємо дані про погоду
    const apiKey = "8ae83bbc4cd75383b73a9baaa7e71895";  // Замініть YOUR_API_KEY на ваш ключ API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert("Oops... City named like this doesn't exist.")
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = '';

    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const temperatureDiv = document.createElement('div');
    temperatureDiv.textContent = `Температура: ${temperature} C`;

    const humidityDiv = document.createElement('div');
    humidityDiv.textContent = `Вологість: ${humidity}%`;

    const windSpeedDiv = document.createElement('div');
    windSpeedDiv.textContent = `Швидкість вітру: ${windSpeed} м/с`;

    weatherInfoDiv.appendChild(temperatureDiv);
    weatherInfoDiv.appendChild(humidityDiv);
    weatherInfoDiv.appendChild(windSpeedDiv);
}