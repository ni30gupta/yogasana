import React, { Component } from "react";
import "./Landing.css";
import Landingcontent from "./Landingcontent";
import Features from "./Features";
import Benefits from "./Benefits";
import Whyus from "./Whyus";
import Faqs from "./Faqs";

class SlideShow extends Component {
  render() {
    return (
      <main className="container-fluid mb-5">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" width="100%" height="100%">
              <img src="../images/hello333.jpg" />

              <div className="container">
                <div className="carousel-caption text-start">
                  {/* <h1 style={{ color: "info" }}>YOGA.</h1>
                  <p style={{ color: "info" }}>
                    Teaches you how to listen to your body.
                  </p> */}
                  {/* <p>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                      href="/Home"
                    >
                      Learn more
                    </button>
                  </p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../images/hello4.jpg" width="100%" height="100%" />

              <div className="container">
                <div className="carousel-caption">
                  {/* <h1 style={{ color: "info" }}>YOGA.</h1>
                  <p style={{ color: "info" }}>No Philosophies just Methods.</p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                      href="/Home"
                    >
                      Learn more
                    </button>
                  </p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../images/hello5.jpg" width="100%" height="100%" />

              <div className="container">
                <div className="carousel-caption text-end">
                  {/* <h1 style={{ color: "info" }}>YOGA</h1>
                  <p style={{ color: "info" }}>
                    Yoga is all about SELF-ACCEPTANCE.
                  </p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                      href="/Home"
                    >
                      Learn more
                    </button>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <Benefits />
        <Features />
        <Whyus />
      </main>
    );
  }
}

export default SlideShow;
