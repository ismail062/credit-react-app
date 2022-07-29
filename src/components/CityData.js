import React from "react";

export default function CityData({ city }) {
  return (
    <table>
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
        <td>{ct.establishedDate}</td>
        <td>{ct.estimatedPopulation}</td>
        <td>{`${ct.currencyName} ${ct.currencySymbol}`}</td>
        <td>{ct.weather}</td>
      </tr>
      ))}
      </tbody>
    </table>
  );
}
