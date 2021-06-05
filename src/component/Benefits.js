import React, { Component } from "react";

class Benefits extends Component {
  render() {
    return (
      <main className="mb-5">
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-5 text-secondary fw-bold lh-1">
                Start your journey towards a healthy life with{" "}
                <span style={{ color: "yellow" }}>Amogh</span>
              </h1>
              <p class="lead lh-3">
                Yoga Is the way to attain a healthier and happier lifestyle, It
                not only activates and boost the natural immunity of the body
                and clams the mind but make you aware of yourself what’s called
                in Sanskrit as Chaitanya. One hour of yoga everyday energizes
                your mind and body for whole day. Embark in the path of bliss
                today, with the experienced instructors from the land of Yoga.
              </p>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                class="rounded-lg-3"
                src="../images/yoga4.jpg"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 text-secondary text-center ">Yoga benefits</h2>
          <h3 className="text-secondary text-center">
            Yoga Rejuvenates you, Ignites you, Alleviate stress and Heals you in
            multiple ways like:
          </h3>
          <div class="card-group my-5">
            <div class="card me-3">
              <img
                src="../images/img.png"
                class="card-img-top"
                alt="..."
                //   style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div class="card me-3">
              <img src="../images/img2.png" class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <img src="../images/img3.png" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <h3 className="text-secondary text-center mt-5">
          Connect with Amogh live Virtually
        </h3>
        <div class="px-4 pt-5 mb-5 text-center">
          <div class="col-lg-6 mx-auto"></div>
          <div class="overflow-hidden" style={{ maxHeight: "70vh" }}>
            <div class="px-5">
              <img
                src="../images/main.jpg"
                class="img-fluid rounded-3  mb-4"
                alt="Example image"
                width="900"
                height="700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Benefits;
