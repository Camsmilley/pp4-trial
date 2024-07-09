import React from 'react'
import './surfinginstructor.css'
import img16 from "../../Assets/img16.webp"

const SurfingInstructor = () => {
  return (
    <>
      <figure>
  <div class="fixed-wrap">
    <div id="fixed">
    </div>
  </div>
</figure>


<div class="surfing-instructor">
  <div class="row welcome text-center gy-3">
    <div class="col-12">
      <h6 class="display-6">Details  Bio & Surfing Experience </h6>
    </div>
    <hr/>
  </div>
</div>


<div class="surf-instructor">
  <div class="row padding gy-3">
    <div class="col-md-4">
      <div class="card">
        <img class="card-imd-top" src={img16}/>
        <div class="card-body">
          <h4 class="card-title">Certification</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, veniam!</p>
            
          </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-imd-top" src={img16}/>
        <div class="card-body">
          <h4 class="card-title">Award</h4>
          <p class="card-text">ipsum dolor sit amet, consectetur adipisicing elit. Vel, veniam!</p>
            
          </div>
        </div>
      </div>
          <div class="col-md-4">
            <div class="card">
              <img class="card-imd-top" src={img16}/>
              <div class="card-body">
                <h4 class="card-title">Lesson Details</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, veniam!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default SurfingInstructor
