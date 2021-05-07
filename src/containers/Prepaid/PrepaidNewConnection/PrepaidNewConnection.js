import React from "react";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";
const PrepaidNewConnection = () => {
  const onSubmit = () => {
    window.gtag("event", "new connection request", {
      event_category: "prepaid",
      event_label: "new connection",
    });
  };
  return (
    <div className="container pt-5 pb-5">
      <h3>Shedule your doorstep KYC</h3>
      <h5>Get your SIM in no time!</h5>
      <form className="container mt-3 col-12 col-sm-10">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            id="name"
            placeholder="Enter mobile number"
          ></input>
        </div>
        <fieldset className="form-group">
          <div>Do you want to port this number?</div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="port"
              id="yes"
            ></input>
            <label className="form-check-label" htmlFor="yes">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="port"
              id="no"
            ></input>
            <label className="form-check-label" htmlFor="no">
              No
            </label>
          </div>
        </fieldset>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            type="text"
            id="location"
            placeholder="Enter area, street name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="house">House/Flat No.</label>
          <input
            className="form-control"
            type="text"
            id="house"
            placeholder="Enter house/flat no"
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-lg btn-success"
          onClick={onSubmit}
          data-toggle="modal"
          data-target="#modalCenter"
        >
          Submit
        </button>
      </form>
      <SuccessModal
        title="Success"
        message="We have received your request. Thankyou for choosing AirSim"
      />
    </div>
  );
};

export default PrepaidNewConnection;
