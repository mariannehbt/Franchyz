import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/carousel.scss'

function Carousel() {


  return(
      <>
      <div id="carouselExampleSlidesOnly" class="carousel slide h-50" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="hero-image-1">
              <div class="hero-text-1">
                <h1>FRANCHYZ</h1>
                <p>Prends en main ton équipe</p>
                <Link to="/register">
                  <button type="button" className="btn btn-primary"> Inscription </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="hero-image-2">
              <div class="hero-text-2">
                <h1>FRANCHYZ</h1>
                <p>Prends en main ton équipe</p>
                <Link to="/register">
                  <button type="button" className="btn btn-primary"> Inscription </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="hero-image-3">
              <div class="hero-text-3">
                <h1>FRANCHYZ</h1>
                <p>Prends en main ton équipe</p>
                <Link to="/register">
                  <button type="button" className="btn btn-primary"> Inscription </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Carousel
