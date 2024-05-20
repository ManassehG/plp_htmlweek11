const apiKey = "621556b96eaee058dbe651f659105582";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const countryElement = document.getElementById("country");
const dataSource = document.getElementById("source");

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if(location){
        fetchWeather(location);
    }else{
        alert("Please enter location");
    }
});

function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`

    fetch(url)
    .then(response => response.json())
    .then((data) => {
        locationElement.textContent =data.name;
        temperatureElement.textContent =`${Math.round(data.main.temp)}C`;
        descriptionElement.textContent = data.weather[0].description;
        countryElement.textContent = data.sys.country;
        dataSource.textContent = data.base;


    })
    .catch((error) => {
        console.error("Error fetching weather: ", error)
    });
}