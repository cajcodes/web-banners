fetch("https://api.weather.gov/points/29.720157704336803,-95.5525100288359")
  .then(response => response.json())
  .then(data => {
    const forecastURL = data.properties.forecast;
    return fetch(forecastURL);
  })
  .then(response => response.json())
  .then(data => {
    const alert = data.properties.periods[0].shortForecast;
    const banner = document.getElementById("weatherAlertBanner");
    banner.innerHTML = `Current Weather Alert: ${alert}`;
    banner.style.display = "block"; // Show the banner
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
