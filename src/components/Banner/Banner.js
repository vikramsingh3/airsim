import React from "react";
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";
const Banner = (props) => {
  return (
    <div className={classes.Banner}>
      <img src={props.image} alt="Loading..." />
      <div
        className={props.textAlign === "left" ? classes.Left : classes.Right}
      >
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <Link to={props.url} className="btn btn-danger">
          {props.btnText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
