import React, { useRef, useState } from 'react';
import CityData from "./CityData";
import { getCityByName } from "../service/countries";
import "../App.css";
export default function SearchCity() {
  const [cities, setCities] = useState([]);
  const cityInputRef = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value;
    if (!city || city.length <= 3) {
      alert("Please enter a city name");
      cityInputRef.current.value = "";
      return;
    }
    // get city data 
    const cityData = await getCityByName(city).then(async (response) => {
      return await response.json();
    });
    // check if not city found
    if (cityData.found === false) {
      alert(`${city} city not found in local database`);
      cityInputRef.current.value = "";
      return;
    }
    setCities([{
        ...cityData.city,
        ...cityData.countryData,
        weather: cityData.weather.main.temp,
      }]);
    cityInputRef.current.value = "";
  };

  return (
    <div className="search__city">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter city name" ref={cityInputRef} />
        <input type="submit" value="Search" />
      </form>
      <CityData city={cities}></CityData>
    </div>
  );
}
