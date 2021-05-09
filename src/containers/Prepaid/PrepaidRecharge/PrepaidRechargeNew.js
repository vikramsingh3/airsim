import React, { useEffect } from "react";
import classes from "./PrepaidRecharge.module.css";
import PrepaidNewImg from "../../../assets/prepaid-recharge-new.png";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";

const PrepaidRechargeNew = () => {
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
    <div className="row m-0">
      <div className={["col-12 col-sm-3 p-5", classes.leftPanel].join(" ")}>
        <h2>Let's get your recharge done</h2>
        <img src={PrepaidNewImg} alt="Prepaid new logo"></img>
      </div>
      <div className="col-12 col-sm-9 p-5">
        <form>
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
            ></input>
          </div>
          <div className="form-group col-md-2">
            <button
              type="button"
              className="btn btn-light btn-block"
              onClick={browsePlanHandler}
            >
              Browse Plans
            </button>
          </div>
          <div className="form-group col-md-2">
            <button
              type="button"
              className="btn btn-lg btn-success mt-5"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrepaidRechargeNew;
