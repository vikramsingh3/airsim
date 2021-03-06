import React from "react";
import classes from "./PlanList.module.css";

const PlanList = (props) => {
  return (
    <div className={[classes.PlanList, "row"].join(" ")}>
      <div className="col-4 col-sm-3">
        <div className={classes.highlight}>{props.price} </div>
        <div className={classes.grayed}> Unlimited Calls </div>
      </div>
      <div className="col-4 col-sm-3">
        <div className={classes.highlight}>{props.data}</div>
        <div className={classes.grayed}> Data </div>
      </div>
      <div className="col-4 col-sm-3">
        <div className={classes.highlight}>{props.validity}</div>
        <div className={classes.grayed}> Validity</div>
      </div>
      <div className="col-12 col-sm-3">
        <button
          type="button"
          className="btn btn-danger float-right btn-block"
          onClick={() => {
            props.btnHandler(props.price, props.data, props.validity);
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default PlanList;
