import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
import { Districts } from "rwanda";

function doesDistricExist(district) {
  const doesDistrictExist = Districts(); 
  for (let i = 0; i < doesDistrictExist.length; i++){
    if (doesDistrictExist[i].toLowerCase() === district.toLowerCase()) {
      return doesDistrictExist[i]; 
    }
  }
}

export default async function getWeatherByLocation(req, res) {
  const { district } = req.params;
    const countryIso = ",ISO31662:RW";
    const baseUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${district}`;
    const apiKey = process.env.WEATHER_API_KEY;
    const userLongAndLat = (baseurl, countryCode, ApiKey) => {
      let newUrl = baseurl + countryCode + ApiKey;
      return newUrl;
    };
    const apiUrl = userLongAndLat(baseUrl, countryIso, apiKey);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const lat = data[0].lat;
        const lon = data[0].lon;
        /** looking for weather data  from a given location */
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${process.env.WEATHER_API_KEY}`
        )
          .then((res) => res.json())
          .then((weatherdata) => {
            // const weather = Object.keys(weatherdata);
            // console.log(weather.length)
            // const weather1 =  weatherdata.coord
            // const weather2 =  weatherdata.coord.lat
            res.send({
              weatherdata
            });
          });
      })
      .catch((err) => {
        res.redirect("/error");
      });
}
