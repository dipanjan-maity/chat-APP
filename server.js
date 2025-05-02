<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Weather App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #f0f8ff;
      padding: 50px;
    }
    input, button {
      padding: 10px;
      font-size: 16px;
    }
    .weather {
      margin-top: 20px;
      padding: 20px;
      background: #ffffff;
      border-radius: 10px;
      display: inline-block;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h1>Check the Weather</h1>
  <input type="text" id="cityInput" placeholder="Enter city name">
  <button onclick="getWeather()">Get Weather</button>

  <div class="weather" id="weatherData"></div>

  <script>
    async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const weatherDiv = document.getElementById('weatherData');
        weatherDiv.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>${data.weather[0].main}</strong>: ${data.weather[0].description}</p>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        `;
      } catch (error) {
        document.getElementById('weatherData').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
      }
    }
  </script>
</body>
</html>
