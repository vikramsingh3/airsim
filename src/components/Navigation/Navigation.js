import React from "react";
import AirSimLogo from "../../assets/AirSimLogo.jpg";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img src={AirSimLogo} alt="AirSim" className={classes.AirSimLogo} />
        </Link>
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
              <Link
                class="nav-link dropdown-toggle"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Prepaid
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link class="dropdown-item" to="/prepaid/recharge">
                  Recharge
                </Link>

                <Link class="dropdown-item" to="/prepaid/new">
                  New Connection
                </Link>

                <Link class="dropdown-item" to="/prepaid/plans">
                  View Plans
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Postpaid
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                <Link class="dropdown-item" to="/postpaid/recharge">
                  Pay Bill
                </Link>
                <Link class="dropdown-item" to="/postpaid/new">
                  New Connection
                </Link>
                <Link class="dropdown-item" to="/postpaid/plans">
                  View Plans
                </Link>
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
