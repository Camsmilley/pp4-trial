import React from 'react'
import video1 from '../Assets/video.mp4';

const SurfingCheck = () => {
  return (
     <section className='home'>
    <div className='overlay'></div>
    <video src={video1} muted autoPlay loop type='video/mp4'></video>

    <div className='homeContent container'>
        <div className='textDiv'>
            <h1 className='homeTitle'>
            THE SAFE WAY IS<br/>
            THE BEST WAY
            </h1>
            <span className='smallText'>
            Nine Simple Check for Safe Surfing<br/>
            </span>
        </div>
    </div>
</section>
  )
}

export default SurfingCheck;
