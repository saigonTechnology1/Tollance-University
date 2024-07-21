import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  return (
    <div className=" position-relative bottom-0">
      <footer className="tl-footer tl-4-footer">
        <div className="tl-footer-top">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-4 order-lg-1 order-3">
                <div className="tl-footer-widget tl-4-footer-widget">
                  <p className="tl-4-copyright-txt m-0 text-center text-lg-start">
                  Copyright © 2024 The President and Fellows of Tollance College
                  </p>
                </div>
              </div>

              <div className="col-lg-4 order-1 order-lg-2">
                <div className="tl-footer-widget tl-4-footer-widget text-center">
                  <Link to="/" className="logo tl-footer-widget-title mb-0">
                    <img
                      src="assets/images/logos/logo-2.png"
                      alt="logo"
                      className="w-100"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 order-2 order-lg-3">
                <div className="tl-footer-widget tl-4-footer-widget">
                  <ul className="tl-footer-links tl-4-footer-links flex-row justify-content-center justify-content-lg-end">
                    <li>
                      <Link to="/" role="button">
                        Home
                      </Link>
                    </li> 
                    <li>
                      <Link to="/admission" role="button">
                        Admission
                      </Link>
                    </li>
                    <li>
                      <Link to="/transcript" role="button">
                      Transcript
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
