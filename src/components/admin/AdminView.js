import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import "../../App.css";
import AddCity from "./AddCity";
import UpdateCity from "./UpdateCity";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AdminView({ city, onDelete, onUpdate }) {
  const [show, setShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false)
  const [cityId, setCityId] = useState(0);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateShow = () => setUpdateShow(true)
  const handleUpdateClose= () => setUpdateShow(false)

  return (
    <div className="search__city">
      <h1>Administration</h1>
      <div className="float-left">
      <Button variant="success" onClick={handleShow} className="float-left" > + </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCity show={show}  stateChanger= {setShow}></AddCity>
        </Modal.Body>
      </Modal>

      <Modal show={updateShow} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <UpdateCity cityId = {cityId} show={updateShow} stateChanger={setUpdateShow}></UpdateCity>
        </Modal.Body>
      </Modal>
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
              <td>
                {(Math.abs(Number(ct.population)) / 1.0e6).toFixed(2) + "m"}
              </td>
              <td>{`${ct.currencyName} ${ct.currencySymbol}`}</td>
              <td>{`${Math.round(ct.weather - 273.15)} ° C`}</td>
              <td>
                <FaTrashAlt
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={() => onDelete(ct.id)}
                />
                <FaPen
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={() => {
                    setCityId(ct.id)
                    handleUpdateShow()
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
