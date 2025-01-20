import React from "react";
//= Data
import data from "@/data/app-data.json";

function Footer({ lightMode }) {
  return (
    <footer className="sub-bg">
      <div className="sub-footer pt-40 pb-40 bord-thin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <a href="#0">
                  <img
                    src={`/dark/assets/imgs/logo-${
                      lightMode ? "dark" : "light"
                    }.png`}
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <img
                src="/dark/assets/imgs/freelancer/faaLicensed.png"
                alt="Faa licensed pilot"
                style={{ width: "45%" }}
              />
            </div>
            <div className="col-lg-4">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © {new Date().getFullYear()} Realtourz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
