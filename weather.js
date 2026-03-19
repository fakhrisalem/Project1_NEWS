let weatherKey = "896a420be0288168a3bf25ebc20f4952";
let weatherCity = "Cairo";
let weatherCountryCode = "EG";

let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity},${weatherCountryCode}&appid=${weatherKey}&units=metric`;
fetch(weatherUrl)
  .then((results) => results.json())
  .then((data) => {

    document.getElementById("weatherid").innerHTML = data.main.temp ;
    
    document.getElementById("weatercity").innerText = data.name;

    document.getElementById("weatherdesc").innerText = data.weather[0].description;

    let weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  

    document.getElementById("weathericon").setAttribute('src', weatherIcon);

  })




