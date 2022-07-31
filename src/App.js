import { useState, useEffect } from "react";
import "./App.css";
import swal from 'sweetalert'
import SearchCity from "./components/searchCity";
import AdminView from "./components/admin/AdminView";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { deleteCity, getCityByName } from "./service/cities";
function App() {
  const [cities, setCity] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const res = await fetch("http://localhost:3000/api/v1/city/");
      const data = await res.json();
      const newData = await data.map(async (city) => {
        const ct = await fetchCity(city.name);
        return {
          ...ct.city,
          ...ct.countryData,
          weather: ct.weather.main.temp,
        };
      });
      Promise.all(newData).then(function (results) {
        setCity(results);
      });
    };
    fetchCities();
  }, []);
  // fetch single city data
  const fetchCity = async (cityName) => {
    const res = await getCityByName(cityName).then(async (response) => {
      return await response.json();
    });
    return res;
  };

  // dete city
  const removeCity = async (id) => {
    await deleteCity(id);
    setCity(cities.filter((city) => city.id !== id));
    swal("Deleted!", "City deleted successfully", "success");
  };

  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30%",
            paddingBottom: "20px",
          }}
        >
          <button className="btn btn-primary">
            <Link to="/user" className="link">User</Link>
          </button>
          <button className="btn btn-success">
            <Link to="/admin" className="link">Admin</Link>
          </button>
        </div>
        <Routes>
          <Route path="/user" element={<SearchCity />} />
          <Route
            path="/admin"
            element={
              <AdminView
                city={cities}
                onDelete={removeCity}
              />
            }
          />
          {/* <AddCity onAdd={addCity} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
