import React, { useEffect } from "react";
import AirSimLogo from "../../assets/AirSimLogo.jpg";
import classes from "./Navigation.module.css";
import { Link, withRouter } from "react-router-dom";
const Navigation = ({ history }) => {
  useEffect(() => {
    history.listen((location, action) => {
      window.dataLayer.push({ event: "optimize.activate" });
    });
    window.changePage = (url) => {
      history.push(url);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={AirSimLogo} alt="AirSim" className={classes.AirSimLogo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="/"
              >
                Prepaid
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item" to="/prepaid/recharge">
                  Recharge
                </Link>

                <Link className="dropdown-item" to="/prepaid/new">
                  New Connection
                </Link>

                <Link className="dropdown-item" to="/prepaid/plans">
                  View Plans
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="/"
              >
                Postpaid
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <Link className="dropdown-item" to="/postpaid/recharge">
                  Pay Bill
                </Link>
                <Link className="dropdown-item" to="/postpaid/new">
                  New Connection
                </Link>
                <Link className="dropdown-item" to="/postpaid/plans">
                  View Plans
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
