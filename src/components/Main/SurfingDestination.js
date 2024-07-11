import React from 'react'
import './main.css'
import carousel from '../../Assets/siargao.webp'
import carousel2 from '../../Assets/carousel2.jpg'
import carousel3 from '../../Assets/carousel3.webp'
import carousel4 from '../../Assets/carousel4.jpg'
import carousel5 from '../../Assets/carousel5.jpg'
import carousel6 from '../../Assets/carousel6.jfif'
import carousel7 from '../../Assets/carousel7.jpg'
import carousel8 from '../../Assets/carousel8.webp'
import carousel9 from '../../Assets/carousel9.jpg'


const SurfingDestination = () => {
  return (

    <>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={carousel}/>
      <div className="carousel-caption">
        <h1 className="display-2">Surfing Siargao</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={carousel2}/>
      <div className="carousel-caption">
      <h1 className="display-2">Surfing San Juan, La Union</h1>
      <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel3}/>
      <div className="carousel-caption">
      <h1 className="display-2">Surfing Baler</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel4}/>
      <div className="carousel-caption">
      <h1 className="display-2">Surfing Calicoan Island</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel5}/>
      <div className="carousel-caption">
      <h1 className="display-2">Surfing Daet, Camarines Norte</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel6}/>
      <div className="carousel-caption">
      <h1 className="display-2">Surfing Baras, Catanduanes</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel7}/>
      <div className="carousel-caption">
      <h1 className="display-2">San Narciso, Zambales</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel8}/>
      <div className="carousel-caption">
      <h1 className="display-2">Real, Quezon</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel9}/>
      <div className="carousel-caption">
      <h1 className="display-2">San Narciso, Zambales</h1>
        <h3>Searching for the endless summer, waves and fun?</h3>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div class="beginner"  style={{ padding: "60px" }}>
<div class="text-start">
  <div class="col-12">
    <h3 class="text-break"><em className="text-primary">wave</em>
    <span className="text-warning">Guru</span> Surfing Destination</h3>
  </div>
 
  <div class="col-12"  style={{ padding: "30px" }}>
    <h3 class="fw-bold-">SURF LESSONS FOR EVERY SURF LEVEL</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
        odio mollitia optio</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
                odio mollitia optio</p>
  </div>
 
  <div class="col-12"  style={{ padding: "30px" }}>
    <h3 class="fw-bold-">EQUIPMENT</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
        odio mollitia optio </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
                odio mollitia optio</p>
  </div>

  <div class="col-12"  style={{ padding: "30px" }}>
    <h3 class="fw-bold-">PRICE</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
        odio mollitia optio</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
                odio mollitia optio</p>
  </div>
  
  <div class="col-12"  style={{ padding: "30px" }}>
    <h3 class="fw-bold-">SURF GUIDING</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
        odio mollitia optio</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
                odio mollitia optio</p>
  </div>
 
  <div class="col-12"  style={{ padding: "30px" }}>
    <h3 class="fw-bold-">SURF LESSON</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
        odio mollitia optio</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
                odio mollitia optio</p>
  </div>
  
  <div class="col-12"  style={{ padding: "30px" }}>
    <h3 class="fw-bold-">SURF WITH US</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
        odio mollitia optio</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
                odio mollitia optio</p>
  </div>
  <hr/>
</div>
</div>

</>
  )
}

export default SurfingDestination
