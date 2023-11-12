import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Image/child.jpg';
import img1 from '../Image/img2.jpg';
import img3 from '../Image/le-groupe-de-l-école.webp';
import "bootstrap/dist/css/bootstrap.css";




const Accueil = () => {
  return (
    <>
    <div className="accueil">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={img1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img3} class="d-block w-100" alt="..."/>
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
<div className="contain">
  <div className="row row-cols-2 g-3">
  <div className="col">
    <div className="card mb-3" id ="card" >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p cclassName="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p cclassName="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  



  <div className="contain">
  <div className="row row-cols-2 g-3">
  <div className="col">
    <div className="card mb-3" id ="card" >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p cclassName="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p cclassName="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>


    </>

  )
  
  }
  


export default Accueil