import React from "react";
import classes from "./PostpaidPlans.module.css";
import prepaidPlans from "../../../assets/prepaid-plans.jpg";
import PlanList from "../../../components/PlanList/PlanList";

const PostpaidPlans = () => {
  const plans = [
    {
      price: "499",
      data: "75",
      validity: "1",
    },
    {
      price: "749",
      data: "125",
      validity: "1",
    },
    {
      price: "999",
      data: "150",
      validity: "1",
    },
    {
      price: "1599",
      data: "Unlimited",
      validity: "1",
    },
  ];
  let planlist = [];
  plans.forEach((item, index) => {
    planlist.push(
      <li key={index}>
        <PlanList
          price={"Rs. " + item.price}
          data={item.data === "Unlimited" ? item.data : item.data + " GB"}
          validity={item.validity + " Month"}
        ></PlanList>
      </li>
    );
  });

  return (
    <div className={[classes.PostpaidPlans, "row"].join(" ")}>
      <div className="col-12 col-md-5 left">
        <h3>Browse Postpaid Plans</h3>
        <img src={prepaidPlans} alt="PostpaidPlans"></img>
      </div>
      <div className="col-12 col-md-7 right">
        <ul>{planlist}</ul>
      </div>
    </div>
  );
};

export default PostpaidPlans;
