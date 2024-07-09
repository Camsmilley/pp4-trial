import React from 'react'
import './login.css'
import { useState } from 'react'
import axios from 'axios'

function LoginHere(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleEmail = (e) => {
setEmail(e.target.value)
}

const handlePassword = (e) => {
  setPassword(e.target.value)
}

const handleApi = () =>{
console.log({email,password})
axios.post('https://reqres.in/api/login', {
  email: email,
  password: password
}).then(result=>{
  console.log(result.data)
  alert('Login SuccessFully')
  
})
.catch(error => {
  alert('Incorrect Email or Password')
  console.log(error)
})

}

  return (
    <>
    <div class="login">
      <div class="wrapper">
        <div class="title "><a href="index.html"><em class="text-primary">wave</em><span class="text-warning">Guru</span></a></div>
        <form action="#">
          <div class="row">
            <i class="fas fa-user  bg-primary"></i>
            <input type="text" placeholder="Email " value={email} onChange={handleEmail} id="user"required/>
          </div>
          <div class="row">
            <i class="fas fa-lock bg-primary"></i>
            <input type="password" placeholder="Password" value={password} onChange={handlePassword} id="pass" required/>
          </div>
          <div class="pass" ><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" onClick={handleApi} value="Login" class="bg-primary"/>
          </div>
          <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
      </div>
    </div>

    </>
  )

}
export default LoginHere
