import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiWaveSurfer } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleCheckout = () => {
    sessionStorage.removeItem("userData");
    window.location.href = "/home";
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <GiWaveSurfer className="icon text-primary" />
          <em className="text-primary">wave</em>
          <span className="text-warning">Guru</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instructor">
                Instructor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/safety">
                Safety
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <FaCartShopping className="text-primary" />
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    alt="Logout"
                    onClick={handleCheckout}
                  >
                    <CiLogout className="text-primary font-weight-bold" />
                  </button>
                </li>
              </>
            )}
          </ul>
          {!isLoggedIn && (
            <Link to="/login" className="nav-item login-button">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
