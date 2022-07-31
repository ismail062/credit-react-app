const API_URL = "http://localhost:3000/api/v1";
const fetchCities = async () => {
  const res = await fetch(`${API_URL}/city`);
  return res.json();
};

const getCityByName = async (cityName) => {
  const res = await fetch(`${API_URL}/city/${cityName}`).then(async (city) => {
    return city;
  });
  return res;
};

const addCityToDB = async (city) => {
  const res = await fetch(`${API_URL}/city`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(city),
  });
  const data = await res.json();
  return data;
};

const updateCity = async (city) => {
  const res = await fetch(`${API_URL}/city/${city.id}`, {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(city),
  });
  const data = await res.json();
  return data;
};

const deleteCity = async (id) => {
  await fetch(`${API_URL}/city/${id}`, {
    method: "DELETE",
  });
};

export { fetchCities, getCityByName, deleteCity, addCityToDB, updateCity};
