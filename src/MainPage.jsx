import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Show from './Show';

export default function MainPage() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({
    name: "",
    country: "",
    lat: "",
    lon: "",
    localtime: "",
    temp: "",
    realfeel: "",
    condition: "",
    windspeed: "",
    cloud: "",
    humidity: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=yes`);
    const weatherData = await response.json();
    setWeather({
      name: weatherData.location.name,
      country: weatherData.location.country,
      lat: weatherData.location.lat,
      lon: weatherData.location.lon,
      localtime: weatherData.location.localtime,
      temp: weatherData.current.temp_c,
      realfeel: weatherData.current.feelslike_c,
      condition: weatherData.current.condition.text,
      windspeed: weatherData.current.wind_kph,
      cloud: weatherData.current.cloud,
      humidity: weatherData.current.humidity,
    });
    setCity(""); // Clear the input field after submitting
  };

  return (
    <div>
      <SearchBox city={city} setCity={setCity} handleSubmit={handleSubmit}></SearchBox>
      <br></br>
      {weather.name !== "" && <Show weather={weather}></Show>}
    </div>
  );
}
