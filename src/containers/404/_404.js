import React from "react";
import classes from "./_404.module.css";

const _404 = () => {
  return (
    <div className={classes._404}>
      <div className={classes.heading}>404</div>
      <div className={classes.smiley}>
        <span role="img" aria-label="">
          &#128533;{" "}
        </span>{" "}
      </div>
      <div className={classes.subHeading}>Page Not Found !!</div>
      <div>This page does not exist. Please check that the URL is correct.</div>
    </div>
  );
};

export default _404;
