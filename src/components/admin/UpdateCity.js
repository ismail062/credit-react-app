import React, { useRef } from "react";
import { updateCity } from "../../service/cities";

const UpdateCity = ({ cityId }) => {
  const populationInputRef = useRef(null);
  const ratingInputRef = useRef(null);
  const estDateInputRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const estimatedPopulation = populationInputRef.current.value;
    const touristRating = ratingInputRef.current.value;
    const establishedDate = estDateInputRef.current.value;

    await updateCity({
      id: cityId,
      estimatedPopulation,
      touristRating,
      establishedDate,
    });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
           
      <div className="form-control">
        <label>Tourist Rating</label>
        <input type="text" ref={ratingInputRef} />
      </div>
      <div className="form-control">
        <label>Date Established</label>
        <input type="text" ref={estDateInputRef} />
      </div>
      <div className="form-control">
        <label>Population</label>
        <input type="text" ref={populationInputRef} />
      </div>
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default UpdateCity;
