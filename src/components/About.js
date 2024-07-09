import React from 'react'
import video1 from '../Assets/video.mp4';

const About = () => {
  return (
     <section className='home'>
    <div className='overlay'></div>
    <video src={video1} muted autoPlay loop type='video/mp4'></video>

    <div className='homeContent container'>
        <div className='textDiv'>
            <h1 className='homeTitle'>
            GET TO KNOW US
            </h1>
            <span className='smallText'>
            About Us<br/>
            </span>
        </div>
    </div>
</section>
  )
}

export default About;
