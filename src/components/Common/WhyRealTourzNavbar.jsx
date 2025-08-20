import React, { useEffect } from "react";
import Link from "next/link";

function WhyRealTourzNavbar({ lightMode }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");
    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");
    form.classList.toggle("open");
    if (form.classList.contains("open")) closeBtn.style.display = "block";
    else closeBtn.style.display = "none";
  }

  return (
    <nav className="navbar navbar-expand-lg static main-bg">
      <div className="container">
        <Link className="logo icon-img-100" href="/">
          {lightMode ? (
            <img src="/dark/assets/imgs/logo-dark.png" alt="logo" />
          ) : (
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#services">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#about">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#portfolio">
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            {/* Uncomment or add more links as needed */}
            <li className="nav-item">
              <Link className="nav-link" href="/#contact">
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button>
              <span className="pe-7s-search"></span>
            </button>
          </div>
          <div className="search-icon" onClick={toggleSearch}>
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default WhyRealTourzNavbar;
