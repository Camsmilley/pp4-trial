import React from 'react'
import './header.css';
import video from '../../Assets/video1.mp4';
import { FaLocationDot } from "react-icons/fa6";
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

            <div className='cardDiv grind'>
                <div className='destinationInput'>
                    <label htmlFor='city'>Search your Destination</label>
                    <div className='input flex'>
                        <input type='text' placeholder='Enter name here...'/><FaLocationDot className='icon'/>
                    </div>
                </div>
                <div className='dateInput'>
                    <label htmlFor='date'>Select your date:</label>
                    <div className='input flex'>
                        <input type='date'/>
                    </div>
                </div>
                <div className='priceInput'>
                    <div className='label_total flex'>
                        <label htmlFor='price'> Max price:</label>
                        <h3 className='total'>$5000</h3>
                    </div>
                      <div className='input flex'>
                        <input type='range' max='5000' min="1000"></input>
                   
                    </div>
                </div>
                <div className='searchOptions flex'>
                <TbZoomMoneyFilled className='icon'/>
                <span>Book Now</span>
                </div>
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
    </div>
</section>
  )
}

export default Header
