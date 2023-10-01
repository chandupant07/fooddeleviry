import React from 'react'
import { Link } from 'react-router-dom'

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="form-inline">
              <input className="form-control mr-sm-2 w-75 d-inline" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger text-white bg-danger d-inline m-2" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" Link="" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        </a>
        <a className="carousel-control-next" Link="" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>

        </a>
      </div>
    </div>
  )
}

