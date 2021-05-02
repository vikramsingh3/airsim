import React from "react";
import classes from "./PostpaidPlans.module.css";
import prepaidPlans from "../../../assets/prepaid-plans.jpg";
import PlanList from "../../../components/PlanList/PlanList";

const PostpaidPlans = () => {
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
