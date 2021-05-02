import React from "react";
import classes from "./PrepaidPlans.module.css";
import prepaidPlans from "../../../assets/prepaid-plans.jpg";
import PlanList from "../../../components/PlanList/PlanList";

const PrepaidPlans = () => {
  const plans = [
    {
      price: "698",
      data: "2",
      validity: "84",
    },
    {
      price: "599",
      data: "2",
      validity: "56",
    },
    {
      price: "598",
      data: "1.5",
      validity: "84",
    },
    {
      price: "399",
      data: "1.5",
      validity: "56",
    },
    {
      price: "199",
      data: "1",
      validity: "28",
    },
  ];
  let planlist = [];
  plans.forEach((item, index) => {
    planlist.push(
      <li key={index}>
        <PlanList
          price={item.price}
          data={item.data}
          validity={item.validity}
        ></PlanList>
      </li>
    );
  });

  return (
    <div className={[classes.PrepaidPlans, "row"].join(" ")}>
      <div className="col-12 col-md-5 left">
        <h3>Browse Prepaid Plans</h3>
        <img src={prepaidPlans} alt="prepaidPlans"></img>
      </div>
      <div className="col-12 col-md-7 right">
        <ul>{planlist}</ul>
      </div>
    </div>
  );
};

export default PrepaidPlans;
