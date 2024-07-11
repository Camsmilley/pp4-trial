import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Instructor from "./components/Instructor";
import Shop from "./components/Shop";
import Safety from "./components/Safety";
import AboutUs from "./components/AbotUs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import SurfingInstructor from "./components/surfinginstructor/SurfingInstructor";
import LoginHere from "./components/Login/LoginHere";
import Beginner from "./components/typeoflesson/Beginner";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import InstructorProfile from "./components/InstructorProfile";
import SignUp from "./components/Login/SignUp";
import Intermediate from "./components/typeoflesson/Intermediate";
import Advance from "./components/typeoflesson/Advance";
import SurfingDestination from "./components/Main/SurfingDestination";
import BuyNowPage from "./components/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="instructor/:id" element={<InstructorProfile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="checkout/:id" element={<BuyNowPage />} />
        <Route path="/shop/:id" element={<SingleProduct />}></Route>
        <Route path="/safety" element={<Safety />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginHere />} />
        <Route path="surfinginstructor" element={<SurfingInstructor />} />
        <Route onclick="beginner" path="beginner" element={<Beginner />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="beginner" element={<Beginner />} />
        <Route path="intermediate" element={<Intermediate />} />
        <Route path="advanced" element={<Advance />} />
        <Route path="surfingdestination" element={<SurfingDestination />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
