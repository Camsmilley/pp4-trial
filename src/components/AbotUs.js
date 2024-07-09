import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import { GiWaveSurfer } from "react-icons/gi";
import About from '../components/About'


const AboutUs = () => {
    return(
      <>
      <About/>
      <section className='main container section'>
            <div className='secTitle'>
                <div className='title'>
                    <h3>About Us</h3>
                </div>
                <small>surfGuru Mission and Vision Statement/ Meet the Team</small>
                    <h4></h4>
      </div>
      <hr/>
      <div className="col-12 ">
        <h5 className="fw-bold-">Our Purpose</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio commodi porro dolorum, officia sint quo ad enim error dolore consequuntur? Dignissimos?</p>
      </div>
      <div className="col-12 ">
        <h5 className="fw-bold-">Our Mission</h5>
        <p>Our Mission statement is to share our surfing expertise so that anyone, ­ novice or
             expert, ­ can have a high­ quality surfing experience, and to do business with integrity
              such that we are always able to lend a helping hand to causes and individuals in need</p>
      </div>
      <div className="col-12">
        <h5 className="fw-bold-">Our Vision</h5>
        <p>Our vision is to help our customers enjoy the ocean on the best equipment we can provide, in order to suit their needs.</p>
      </div>
    <div className="row welcome text-center">
    <div className="col-12">
      <h1 className="display-6">Meet the Team</h1>
    </div>
    <hr/>
  </div>
  <div className="container padding">
  <div className="row padding">
    <div className="col-md-6">
      <div className="card">
        <img className="card-imd-top" src=""/>
        <div className="card-body">
          <h4 className="card-title">Camille Joy Domingo</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Provident delectus rerum accusamus velit natus asperiores esse reprehenderit perspiciatis deserunt recusandae!</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <img className="card-imd-top" src=""/>
        <div className="card-body">
          <h4 className="card-title">Ralph Begil</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Provident delectus rerum accusamus velit natus asperiores esse reprehenderit perspiciatis deserunt recusandae!</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
      </div>
    </div>
  </div>
</div>
<hr/>
</section>
</>
);
}

export default AboutUs;


