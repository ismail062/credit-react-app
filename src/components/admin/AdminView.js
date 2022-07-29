import { FaTrashAlt, FaPen } from "react-icons/fa";
import Button from "../shared/Button";
import "../../App.css"
export default function AdminView({ city, onDelete, onUpdate, onAdd}) {
   
  return (
    <div className="search__city">
    <h1 >Administration</h1>
    <Button text={"+"} color={"gray"} onClick={() => onAdd()}></Button>
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
          <th>Modify</th>
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
            <td>{ct.estimatedPopulation}</td>
            <td>{`${ct.currencyName} ${ct.currencySymbol}`}</td>
            <td>{ct.weather}</td>
            <td>
                <FaTrashAlt style={{ color: 'black', cursor: 'pointer' }} onClick={() => onDelete(ct.id)}/>
                <FaPen style={{ color: 'black', cursor: 'pointer' }} onClick={() => onUpdate(ct.id)}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
