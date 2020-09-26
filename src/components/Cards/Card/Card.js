import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={props.url} className={classes.Card}>
      <div>
        <img src={props.logo} alt={props.service} />
        <h4>{props.service}</h4>
      </div>
    </Link>
  );
};

export default Card;
