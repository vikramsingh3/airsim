import React from "react";
import AirSimLogo from "../../assets/AirSimLogo.jpg";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img src={AirSimLogo} alt="AirSim" className={classes.AirSimLogo} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Prepaid
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <a class="dropdown-item" href="/">
                  Recharge
                </a>
                <a class="dropdown-item" href="/">
                  New Connection
                </a>
                <a class="dropdown-item" href="/">
                  View Plans
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Postpaid
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                <a class="dropdown-item" href="/">
                  Pay Bill
                </a>
                <a class="dropdown-item" href="/">
                  New Connection
                </a>
                <a class="dropdown-item" href="/">
                  View Plans
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
