import React from "react";

export default function CityData({ city }) {
  return (
    <table className="city__search">
      <thead>
        <tr>
          <th>Name</th>
          <th>State</th>
          <th>Country</th>
          <th>Toursit Rating</th>
          <th>Date Established</th>
          <th>Estimated Population</th>
          <th>Currency</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody>
      {city.map((ct, index) => (
        <tr key={index}>
        <td>{ct.name}</td>
        <td>{ct.state}</td>
        <td>{ct.country}</td>
        <td>{ct.touristRating}</td>
        <td>{ct.establishedDate.substring(0, 10)}</td>
        <td>{(Math.abs(Number(ct.population)) / 1.0e+6).toFixed(2) + 'm'}</td>
        <td>{`${ct.currencyName} ${ct.currencySymbol}`}</td>
        <td>{`${Math.round(ct.weather-273.15)} ° C` } </td>
      </tr>
      ))}
      </tbody>
    </table>
  );
}
