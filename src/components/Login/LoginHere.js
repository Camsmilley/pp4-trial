import React, { useState } from "react";
import "./login.css"; // Import your CSS file
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginHere() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        console.log(response.data);
        const userLogin = [{ email: email, pass: password }];

        // Store email and password in session storage
        sessionStorage.setItem("userData", JSON.stringify(userLogin));

        // Redirect to home
        if (typeof window !== "undefined") {
          window.location.href = "/home";
        } else {
          console.warn("Redirection not possible in non-browser environment.");
        }
      } else {
        alert("Login Failed: " + response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <div className="login">
        <div className="wrapper">
          <div className="title">
            <p className="text-primary">
              <i>wave</i>
            </p>
            <h1 className="text-warning">Guru</h1>
          </div>
          <form onSubmit={handleApi}>
            <div className="row">
              <i className="bi bi-person-fill bg-primary"></i>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                id="user"
                required
              />
            </div>
            <div className="row">
              <i className="bi bi-lock-fill bg-primary"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                id="pass"
                required
              />
            </div>
            <div className="pass">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Login" className="bg-primary" />
            </div>
            <div className="signup-link">
              Not a member? <Link to="/signup">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginHere;
