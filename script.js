const input = document.getElementById("input");
const button = document.getElementById("button");
const searchResults = document.getElementById("search_results");

const cityPara = document.getElementById("city_para");
const countryPara = document.getElementById("country_para");
const localTimePara = document.getElementById("local_time_para");
const celsTempPara = document.getElementById("cels_temp_para");
const farhTempPara = document.getElementById("farh_temp_para");
const conditionPara = document.getElementById("cond_para");



button.addEventListener("click", function () {
  let cityName = input.value.trim();
  if (cityName == "") {
    alert("Please enter area name!");
    return;
  }

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=78b6c3ea309a4841a47174459251312&q=${cityName}&aqi=yes`
  )
    .then((response) => response.json())
    .then((data) => {
      const city = data.location.name;
      const country = data.location.country;
      const time = data.location.localtime;
      const celsTemp = data.current.temp_c;
      const farhTemp = data.current.temp_f;
      const condition = data.current.condition.text;

      searchResults.textContent = "Search results for: " + city;
      cityPara.textContent = "City: " + city;
      countryPara.textContent = "Country: " + country;
      celsTempPara.textContent = "Celsius: " + celsTemp;
      farhTempPara.textContent = "Fahrenheit: " + farhTemp;
      conditionPara.textContent = "Condition: " + condition;
      localTimePara.textContent = "Time: " + time;
    })
});
