import React from "react";
import classes from "./Caraousel.module.css";
import caraousel1 from "../../assets/caraousel1.png";
import caraousel2 from "../../assets/caraousel2.png";
import caraousel3 from "../../assets/caraousel3.png";

const Caraousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={caraousel1}
            class="d-block w-100"
            alt="..."
            className={classes.caraouselItem}
          />
          <div class="carousel-caption d-md-block">
            <div className={classes.OpaqueBox}>
              <h5>Fastest Network</h5>
              <p>Get the best downloas and upload speed.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={caraousel2}
            class="d-block w-100"
            alt="..."
            className={classes.caraouselItem}
          />
          <div class="carousel-caption d-md-block">
            <div className={classes.OpaqueBox}>
              <h5>Network Coverage</h5>
              <p>
                Access from anywhere in India. Now conneting even the most
                remote places.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={caraousel3}
            class="d-block w-100"
            alt="..."
            className={classes.caraouselItem}
          />
          <div class="carousel-caption d-md-block">
            <div className={classes.OpaqueBox}>
              <h5>Connecting People</h5>
              <p>Sharing happiness with never-ending conversations.</p>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Caraousel;
