document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = document.getElementById('city');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const description = document.getElementById('description');
    const weatherIcon = document.getElementById('weather-icon');

    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = cityInput.value;
        const apiKey = '5534f60363445ff4e5cf12eada90f163'; // Your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.cod === 200) {
                cityName.textContent = data.name;
                temperature.textContent = data.main.temp;
                humidity.textContent = data.main.humidity;
                description.textContent = data.weather[0].description;
                weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                weatherResult.classList.remove('hide');
            } else {
                alert('City not found');
                weatherResult.classList.add('hide');
            }
        } catch (error) {
            alert('Error fetching weather data');
            weatherResult.classList.add('hide');
        }
    });
});

