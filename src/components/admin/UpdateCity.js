import React, { useRef } from "react";
import swal from "sweetalert";
import { updateCity } from "../../service/cities";

const UpdateCity = ({ cityId, show, stateChanger }) => {
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
    swal("Updated!", "City Updated successfully", "success");
    stateChanger(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-4 align_center_element">
          <label>Tourist Rating</label>
        </div>
        <div className="col-md-8">
          <input
            className="form-control"
            type="number"
            step="0.1"
            min="0"
            max="5"
            ref={ratingInputRef}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 align_center_element">
          <label>Date Established</label>
        </div>
        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="yyyy-mm-dd e.b. 2022-07-31"
            type="date"
            required
            ref={estDateInputRef}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 align_center_element">
          <label>Population</label>
        </div>
        <div className="col-md-8">
          <input
            className="form-control"
            type="text"
            ref={populationInputRef}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-9">&nbsp; </div>
        <div className="col-md-3">
          <input type="submit" value="Submit" className="btn btn-block" />
        </div>
      </div>
    </form>
  );
};

export default UpdateCity;
