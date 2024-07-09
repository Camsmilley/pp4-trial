import React from 'react'
import './header.css';
import video from '../../Assets/video1.mp4';
import { TbZoomMoneyFilled } from "react-icons/tb";
import { TfiFacebook } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { TbTablePlus } from "react-icons/tb";

const Header = () => {
  return (
     <section className='home'>
    <div className='overlay'></div>
    <video src={video} muted autoPlay loop type='video/mp4'></video>

    <div className='homeContent container'>
        <div className='textDiv'>
            <h1 className='homeTitle'>
            IT'S TIME FOR<br/>NEW ADVENTURE
            </h1>
            <span className='smallText'>
            Explore the top surfing spots of the Philippines!<br/>
            </span>
            </div>
            <div className='homeFooterIcons flex'>
                <div className='rightIcons'>
                <TfiFacebook className='icon'/>
                <SiGmail  className='icon'/>
                <FaInstagram className='icon'/>

                </div>
                <div className='leftIcon'>
                <CiBoxList className='icon'/>
                <TbTablePlus  className='icon'/>

                </div>
            </div>
        </div>
</section>
  )
}

export default Header
