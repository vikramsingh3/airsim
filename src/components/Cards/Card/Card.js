import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <a href="/" className={classes.Card}>
      <div>
        <img src={props.logo} alt={props.service} />
        <h4>{props.service}</h4>
      </div>
    </a>
  );
};

export default Card;
