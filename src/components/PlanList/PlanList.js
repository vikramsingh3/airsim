import React from "react";
import classes from "./PlanList.module.css";

const PlanList = (props) => {
  return (
    <div className={[classes.PlanList, "row"].join(" ")}>
      <div className="col-3">
        <div className={classes.highlight}>Rs. {props.price} </div>
        <div className={classes.grayed}> Unlimited Calls </div>
      </div>
      <div className="col-3">
        <div className={classes.highlight}>{props.data} GB</div>
        <div className={classes.grayed}> Data </div>
      </div>
      <div className="col-3">
        <div className={classes.highlight}>{props.validity} Days </div>
        <div className={classes.grayed}> Validity</div>
      </div>
      <div className="col-3 ">
        <button type="button" className="btn btn-danger float-right btn-block">
          Select
        </button>
      </div>
    </div>
  );
};

export default PlanList;
