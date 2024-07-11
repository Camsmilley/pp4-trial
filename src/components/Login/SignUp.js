import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div className="login">
      <div className="wrapper">
        <div className="title "><a href="index.html"><em className="text-primary">wave</em><span className="text-warning">Guru</span></a></div>
        <form action="#">
        <div className="row">
            <i className="fas fa-user  bg-primary"></i>
            <input type="text" placeholder="Name " id="user"required/>
          </div>
          <div className="row">
            <i className="fas fa-user  bg-primary"></i>
            <input type="text" placeholder="Email " id="user"required/>
          </div>
          <div className="row">
            <i className="fas fa-lock bg-primary"></i>
            <input type="password" placeholder="Password" id="pass" required/>
          </div>
          <div className="pass">
            <label><input type="checkbox" />
            I agree to the terms and condition</label>
            </div>
          <div className="row button">
            <input type="submit"  value="Signup" className="bg-primary"/>
          </div>
          <div className="signup-link">Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default SignUp
