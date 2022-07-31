import React, { useRef } from "react";
import { addCityToDB } from "../../service/cities";
import swal from "sweetalert";

const AddCity = ({ show, stateChanger }) => {
  const cityInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const stateInputRef = useRef(null);
  const ratingInputRef = useRef(null);
  const estDateInputRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = cityInputRef.current.value;
    const country = countryInputRef.current.value;
    const state = stateInputRef.current.value;
    const touristRating = ratingInputRef.current.value;
    const establishedDate = estDateInputRef.current.value;

    const city = await addCityToDB({
      name,
      country,
      state,
      touristRating,
      establishedDate,
    });

    swal(
      "Success",
      `City with id ${city.city} has been added successfully`,
      "success"
    );
    stateChanger(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-4 align_center_element">
          <span className="">City Name</span>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder=""
            ref={cityInputRef}
          />
        </div>
      </div>
      <div>
      <div className="row">
      <div className="col-md-4 align_center_element">
        <label>Country</label>
        </div>
        <div className="col-md-8">
        <input className="form-control" type="text" ref={countryInputRef} />
        </div>
        </div>
      </div>
      <div className="row">
      <div className="col-md-4 align_center_element">
        <label>State</label>
        </div>
        <div className="col-md-8">
        <input className="form-control" type="text" ref={stateInputRef} />
        </div>
      </div>
      <div className="row">
      <div className="col-md-4 align_center_element">
        <label>Tourist Rating</label>
        </div>
        <div className="col-md-8">
        <input className="form-control" type="text" ref={ratingInputRef} />
        </div>
      </div>
      <div className="row">
      <div className="col-md-4 align_center_element">
        <label>Date Established</label>
        </div>
        <div className="col-md-8">
        <input className="form-control" type="text" ref={estDateInputRef} />
        </div>
      </div>
      <div className="row">
      <div className="col-md-9">
        &nbsp;        </div>
        <div className="col-md-3">
      <input type="submit" value="Submit" className="btn btn-block" />      
        </div>
      </div>
    </form>
  );
};

export default AddCity;
