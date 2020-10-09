import React from "react";
import classes from "./PostpaidRecharge.module.css";

const PostpaidRecharge = () => {
  return (
    <div className={classes.PostpaidRecharge}>
      <div className={classes.content}>
        <h2>Let's get your bill paid</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="phone">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter Number"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="amount">Amount</label>
              <input
                disabled
                type="number"
                className="form-control"
                id="amount"
                placeholder="Rs."
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-lg btn-success">
            Pay Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostpaidRecharge;
