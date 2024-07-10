import React, { useState } from "react";
import "./login.css"; // Import your CSS file
import axios from "axios";

function LoginHere() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        console.log(response.data);

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
        {" "}
        {/* Use className for better accessibility */}
        <div className="wrapper">
          <div className="title">
            <a href="index.html">
              <em className="text-primary">wave</em>
              <span className="text-warning">Guru</span>
            </a>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user bg-primary"></i>
              <input
                type="text"
                placeholder="Email "
                value={email}
                onChange={handleEmail}
                id="user"
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-lock bg-primary"></i>
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
              <a href="#">Forgot password?</a>
            </div>
            <div className="row button">
              <input
                type="submit"
                onClick={handleApi}
                value="Login"
                className="bg-primary"
              />
            </div>
            <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginHere;
