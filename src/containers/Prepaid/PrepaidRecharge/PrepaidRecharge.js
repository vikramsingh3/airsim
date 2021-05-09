import React, { useEffect } from "react";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";
import classes from "./PrepaidRecharge.module.css";

const PrepaidRecharge = () => {
  useEffect(() => {
    let storedPhone = window.sessionStorage.getItem("prepaidPhone");
    let storedPlan = window.sessionStorage.getItem("prepaidPlan");
    if (storedPhone) {
      document.getElementById("phone").value = storedPhone;
    }
    if (storedPlan) {
      document.getElementById("amount").value = JSON.parse(storedPlan)?.price;
    }
  }, []);
  const rechargeInitiated = () => {
    window.gtag("event", "recharge initiated", {
      event_category: "prepaid",
      event_label: "recharge",
    });
  };
  const browsePlanHandler = () => {
    let phone = document.getElementById("phone")?.value;
    if (phone) {
      window.sessionStorage.setItem("prepaidPhone", phone);
    }
    window.gtag("event", "browse plan clicked", {
      event_category: "prepaid",
      event_label: "browse plan",
    });
    window.changePage("/prepaid/plans");
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
                type="text"
                className="form-control"
                id="amount"
                placeholder="Enter Amount"
                disabled
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
                onClick={browsePlanHandler}
              >
                Browse Plans
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={rechargeInitiated}
            data-toggle="modal"
            data-target="#modalCenter"
          >
            Recharge
          </button>
          <SuccessModal
            title="Success"
            message="Prepaid recharge request processed"
          />
        </form>
      </div>
    </div>
  );
};

export default PrepaidRecharge;
