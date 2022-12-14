import React, { useRef, useState } from "react";
import CityData from "./CityData";
import { getCityByName } from "../service/cities";
import swal from "sweetalert";
import "../App.css";
export default function SearchCity() {
  const [cities, setCities] = useState([]);
  const cityInputRef = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value;
    if (!city || city.length <= 3) {
      swal("Oops!", "City cannot be empty", "error");
      cityInputRef.current.value = "";
      return;
    }
    // get city data
    const cityData = await getCityByName(city).then(async (response) => {
      return await response.json();
    });
    // check if not city found
    if (cityData.found === false) {
      swal(
        `${city} NOT Found!`,
        `${city} City not found in local database`,
        "error"
      );
      cityInputRef.current.value = "";
      return;
    }
    setCities([
      {
        ...cityData.city,
        ...cityData.countryData,
        weather: cityData.weather.main.temp,
      },
    ]);
    cityInputRef.current.value = "";
  };

  return (
    <div className="search__city">
      <form onSubmit={onSubmit} className="search">
        <div className="row">
          <div className="col-md-9">
            <input
              type="text"
              placeholder="Enter capital city name"
              size="35"
              required
              ref={cityInputRef}
            />
          </div>
          <div className="col-md-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <CityData city={cities}></CityData>
    </div>
  );
}
