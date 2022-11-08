const API_key = "4835e1f64d40b0dbe4dd8392e213e6d8";

function onWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    fetch(url).then((response) => response.json()).then((data) => {
        const celcius = document.querySelector(".weather span:nth-child(1)");
        const city = document.querySelector(".weather span:nth-child(2)");
        const weather = document.querySelector(".weather span:last-child");

        celcius.innerText = `${(data.main.temp - 273).toFixed(1)} / `;
        city.innerText = `${data.name} / `;
        weather.innerText = data.weather[0].description;
    })

}

function onError() {
    alert("No Location");
}

navigator.geolocation.getCurrentPosition(onWeather,onError);