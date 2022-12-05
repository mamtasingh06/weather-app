
   // apikey: "580336f66e14aa8fecff05a485d76d28",
    let city = document.getElementById("city");
let btn = document.getElementById("search");

// Data store area
let city_name;
let tem;
let icon;
let weastatus;
let max_temp;
let min_temp;
let wind_speed;
let humidity;

btn.addEventListener("click", function (event) {
  event.preventDefault();
  let x = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city.value +
      "&appid=580336f66e14aa8fecff05a485d76d28&units=metric"
  );
  x.then((value1) => {
    return value1.json();
  }).then((data) => {
    // ALL JSON DATA
    console.log(data);
    if (data.cod == 200) {
      // Search City name
      city_name = data.name;
      // Temperature Data
      tem = data.main.temp;
      // Weather icon
      icon = data.weather[0].icon;
      // status weather
      weastatus = data.weather[0].main;
      // max temp
      max_temp = data.main.temp_max;
      // min temp
      min_temp = data.main.temp_min;
      // wind speed
      wind_speed = data.wind.speed;
      // humidity
      humidity = data.main.humidity;

      //Text rewrite area
      document.getElementById("city_res").innerText = "Weather in "+city_name; //city
      document.getElementById("icon_img").src =
       "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.getElementById("temp-now").innerText =tem.toFixed(0) + "°c";

      document.getElementById("wea-sta").innerText = weastatus;
      // document.getElementById("max-temp").innerText = "Max temp: " +max_temp.toFixed(0) + "°c";
      // document.getElementById("min-temp").innerText = "Min temp: " +min_temp.toFixed(0) + "°c";
      document.getElementById("wind-speed").innerText = "Wind Speed: " +wind_speed.toFixed(0) + "Km/h";
      document.getElementById("humidity").innerText = "Humidity: " +humidity.toFixed(0) + "%";
      document.getElementById("divcent2").style.display = "block";
      document.getElementById("disnone").style.display = "none";
    } else {
      //document.getElementById("disnone").style.display = "none";
      document.getElementById("invalidd").innerText = "Please enter correct city name..!";
      //alert("Please enter a valid city name.");
    }
  });
});
