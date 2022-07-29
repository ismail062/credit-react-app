import { useState, useEffect } from "react";
import "./App.css";
import CityData from "./components/CityData";
import SearchCity from "./components/searchCity";
import AddCity from "./components/admin/AddCity";
import AdminView from "./components/admin/AdminView";
import { fetchCities } from "./service/countries";
function App() {
  const [cities, setCity] = useState([]);

  useEffect(() => {

    const fetchCities = async () => {
       const  res = await fetch('http://localhost:3000/api/v1/city/')
       const data = await res.json()
       setCity(data);
    }
    fetchCities();
  }, [])

  const fetchCity = async (cityName) => {
    const res =  await fetch(`http://localhost:3000/api/v1/city/${cityName}`)
    const cityData  = await res.json();
    return cityData;
  } 
  const deleteCity = async (id) => {
    console.log(`delete city with id ${id}`)
  };

  const updateCity = async (id) => {
    console.log(`update city with id ${id}`)
  };

  const addCity = async (data) => {
    console.log(`add city with data ${data}`,);
  };

  
  return (
    <>
      <SearchCity />
      <CityData city={cities} />
      <AddCity onAdd={addCity} />
      <AdminView city={cities} onDelete={deleteCity} onUpdate={updateCity} onAdd={addCity}  />
    </>
  );
}

export default App;
