import React from "react";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        {/*
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECT OUT ALL THE TRENDS</p>
          </div>
        </div> */}
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="d-block w-100"
                alt="Sneakers"
                height="900px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2019/01/24/09/37/shoes-3952048_1280.jpg"
                class="d-block w-100"
                alt="Sneakers"
                height="900px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/05/11/16/shoes-6916897_1280.jpg"
                class="d-block w-100"
                alt="Sneakers"
                height="900px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1600"
                class="d-block w-100"
                alt="Sneakers"
                height="900px"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
