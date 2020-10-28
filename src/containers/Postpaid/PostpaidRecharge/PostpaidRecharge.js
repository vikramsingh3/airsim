import React from "react";
import classes from "./PostpaidRecharge.module.css";

const PostpaidRecharge = () => {
  const payBillInitiated = () => {
    alert("Bill payment Initated");
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
                type="number"
                className="form-control"
                id="amount"
                placeholder="Rs."
              ></input>
            </div>
          </div>
          <button className="btn btn-lg btn-success" onClick={payBillInitiated}>
            Pay Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostpaidRecharge;
