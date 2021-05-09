import React, { useEffect } from "react";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";
import classes from "./PostpaidRecharge.module.css";

const PostpaidRecharge = () => {
  useEffect(() => {
    let storedPhone = window.sessionStorage.getItem("postpaidPhone");
    let storedPlan = window.sessionStorage.getItem("postpaidPlan");
    if (storedPhone) {
      document.getElementById("phone").value = storedPhone;
    }
    if (storedPlan) {
      document.getElementById("amount").value = JSON.parse(storedPlan)?.price;
    }
  }, []);
  const payBillInitiated = () => {
    window.gtag("event", "bill payment initiated", {
      event_category: "postpaid",
      event_label: "pay bill",
    });
  };
  return (
    <div className={classes.PostpaidRecharge}>
      <div className={classes.content}>
        <h2>Let's get your bill paid</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter Number"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="amount">Amount</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="amount"
                placeholder="Rs."
              ></input>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={payBillInitiated}
            data-toggle="modal"
            data-target="#modalCenter"
          >
            Pay Bill
          </button>
          <SuccessModal
            title="Success"
            message="Bill payment request processed"
          />
        </form>
      </div>
    </div>
  );
};

export default PostpaidRecharge;
