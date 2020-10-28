import React from "react";
import classes from "./PrepaidRecharge.module.css";

const PrepaidRecharge = () => {
  const rechargeInitiated = () => {
    alert("Recharge Initated");
    window.dataLayer.push({
      event: "trackEvent",
      eventCategory: "prepaid",
      eventLabel: "recharge",
      eventAction: "recharge initiated",
    });
  };
  return (
    <div className={classes.PrepaidRecharge}>
      <div className={classes.content}>
        <h2>Let's get your recharge done</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter Number"
              ></input>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Enter Amount"
              ></input>
            </div>
            <div
              className={[classes.relative, "form-group col-md-2"].join(" ")}
            >
              <button
                type="button"
                className={[classes.absolute, "btn btn-light btn-block"].join(
                  " "
                )}
              >
                Browse Plans
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={rechargeInitiated}
          >
            Recharge
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrepaidRecharge;
