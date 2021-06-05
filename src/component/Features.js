import React, { Component } from "react";
import "./Feature.css";
class Features extends Component {
  render() {
    return (
      <main className="mt-5">
        <div class="d-md-flex flex-md-equal w-100 my-md-5 ps-md-3">
          <div class="bg-secondary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Yoga for flexibility</h2>
              <p class="lead">
                Yoga poses work by stretching your muscles.It can help you move
                better and feel less stiff or tired.
              </p>
            </div>
            <img
              src="./images/photo11.jpg"
              class="bg-light shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21PX 21PX 0 0",
              }}
            />
          </div>
          <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Yoga for stress relief</h2>
              <p class="lead">
                Yoga can benefit three aspects of ourselves that are often
                affected by stress: our body, mind, and breathing.{" "}
              </p>
            </div>
            <img
              src="./images/photo8.jpg"
              class="bg-light shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21PX 21PX 0 0",
              }}
            />
          </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-5 ps-md-3">
          <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Yoga for core strength</h2>
              <p class="lead">
                yoga allows you to raise your heartbeat, strengthen your
                muscles, and lengthen them out all at once.
              </p>
            </div>
            <img
              src="./images/yoga3.jpg"
              class="bg-light shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21PX 21PX 0 0",
              }}
            />
          </div>
          <div class="bg-secondary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Yoga and meditation</h2>
              <p class="lead">
                “Regular yoga and meditation practice creates mental clarity and
                calmness.
              </p>
            </div>
            <img
              src="./images/hello2.jpg"
              class="bg-light shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21PX 21PX 0 0",
              }}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Features;
