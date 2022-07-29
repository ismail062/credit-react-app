


const API_URL = "http://localhost:3000/api/v1/"
const fetchCities = async () => {
    const  res = await fetch(`${API_URL}/city`)
    return res.json()
}

const getCityByName = async (cityName) => {
    const res = await fetch(`${API_URL}/city/${cityName}`)
    return res.json();
}

export {
    fetchCities,
    getCityByName,
}