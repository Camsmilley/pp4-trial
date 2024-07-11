import React from "react";
import "./footer.css";
// import video2 from '../../Assets/video.mp4'
// import { FiSend } from "react-icons/fi";
// import { GiWaveSurfer } from "react-icons/gi";
// import { FaTwitter } from "react-icons/fa6";
// import { BiLogoGmail } from "react-icons/bi";
// import { FaTelegram } from "react-icons/fa";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FiChevronRight } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { GiWaveSurfer } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="row text-center">
          <div class="col-md-4">
            <hr class="light" />
            <a>
              <GiWaveSurfer className="icon text-primary" />{" "}
              <em class="text-primary">wave</em>
              <span class="text-warning">Guru</span>
            </a>
            <hr class="light" />
            <p>+639-000-000-000</p>
            <p>waveGuru@gmail.com</p>
            <p>123 Street Name</p>
          </div>
          <div class="col-md-4">
            <hr class="light" />
            <h5>Our Hours</h5>
            <hr class="light" />
            <p>Monday-Sunday 9am - 5pm</p>
          </div>
          <div class="col-md-4">
            <hr class="light" />
            <h5>Service Area</h5>
            <hr class="light" />
            <p>Siargao , General Luna</p>
            <p>Siargao , Burgos, Pacifico</p>
            <p>Baler Aurora</p>
            <p>San Juan ,La Union</p>
          </div>
          <div class="col-12">
            <hr class="light" />
            <p className="footer-copyright text-center">
              Copyright 2024 &copy;{" "}
              <a>
                <GiWaveSurfer className="icon text-primary" />
                <em className="text-primary">wave</em>
                <span className="text-warning">Guru</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
