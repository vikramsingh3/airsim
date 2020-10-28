import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container text-center text-md-left">
        <div className="row">
          {/* <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              amet numquam iure provident voluptate esse quasi, veritatis totam
              voluptas nostrum.
            </p>
          </div> */}

          {/* <hr className="clearfix w-100 d-md-none" /> */}

          <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">
              Quick Access
            </h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <a href="#!">Quick Access</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">ABOUT US</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">BLOG</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#!">AWARDS</a>
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fa fa-home mr-3"></i> Mumbai , Maharashtra ,
                  India
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-envelope mr-3"></i>{" "}
                  vikram.c.singh@capgemini.com
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-phone mr-3"></i> +91 801 102 4085
                </p>
              </li>
              {/* <li>
                <p>
                  <i className="fa fa-print mr-3"></i> + 01 234 567 89
                </p>
              </li> */}
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

            <a type="button" className={classes.Social} href="/">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a type="button" className={classes.Social} href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a type="button" className={classes.Social} href="/">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-3">
        &copy; 2020 Copyright :<span> Vikram Singh</span>
      </div>
    </footer>
  );
};

export default Footer;
