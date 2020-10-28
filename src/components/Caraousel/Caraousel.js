import React from "react";
import classes from "./Caraousel.module.css";
import caraousel1 from "../../assets/caraousel1.png";
import caraousel2 from "../../assets/caraousel2.png";
import caraousel3 from "../../assets/caraousel3.png";

const Caraousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={caraousel1}
            alt="..."
            className={[classes.caraouselItem, "d-block w-100"].join(" ")}
          />
          <div className="carousel-caption d-md-block">
            <div className={classes.OpaqueBox}>
              <h5>Fastest Network</h5>
              <p>Get the best downloas and upload speed.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={caraousel2}
            alt="..."
            className={[classes.caraouselItem, "d-block w-100"].join(" ")}
          />
          <div className="carousel-caption d-md-block">
            <div className={classes.OpaqueBox}>
              <h5>Network Coverage</h5>
              <p>
                Access from anywhere in India. Now conneting even the most
                remote places.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={caraousel3}
            alt="..."
            className={[classes.caraouselItem, "d-block w-100"].join(" ")}
          />
          <div className="carousel-caption d-md-block">
            <div className={classes.OpaqueBox}>
              <h5>Connecting People</h5>
              <p>Sharing happiness with never-ending conversations.</p>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Caraousel;
