import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Routes, Route } from "react-router-dom";
import Instructor from "./components/Instructor";
import Shop from "./components/Shop";
import Safety from './components/Safety';
import AboutUs from'./components/AbotUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import SurfingInstructor from './components/surfinginstructor/SurfingInstructor';
import LoginHere from './components/Login/LoginHere';
import Beginner from './components/beginner/Beginner';



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/instructors" element={<Instructor/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/safety" element={<Safety/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/login" element={<LoginHere/>}/>
        <Route path='surfingInstructor' element={<SurfingInstructor/>}/>
        <Route onclick = 'beginner' path='beginner' element={<Beginner/>}/>
      </Routes> 
      <Footer/>

    </>
  );
}

export default App;
