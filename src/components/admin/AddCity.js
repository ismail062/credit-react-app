import React, { useRef } from "react";
import { addCityToDB } from "../../service/cities";

const AddCity = ({ onAdd }) => {
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

    await addCityToDB({
      name,
      country,
      state,
      touristRating,
      establishedDate,
    });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>City Name</label>
        <input type="text" placeholder="" ref={cityInputRef} />
      </div>
      <div className="form-control">
        <label>Country</label>
        <input type="text" ref={countryInputRef} />
      </div>
      <div className="form-control">
        <label>State</label>
        <input type="text" ref={stateInputRef} />
      </div>
      <div className="form-control">
        <label>Tourist Rating</label>
        <input type="text" ref={ratingInputRef} />
      </div>
      <div className="form-control">
        <label>Date Established</label>
        <input type="text" ref={estDateInputRef} />
      </div>
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default AddCity;
