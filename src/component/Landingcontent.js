import React, { Component } from "react";

class Landingcontent extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="../images/photo8.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">What Is Yoga?</h1>
              <p className="lead mt-5 lh-base">
                Yoga Is the way to attain a healthier and happier lifestyle, It
                not only activates and boost the natural immunity of the body
                and clams the mind but make you aware of yourself what’s called
                in Sanskrit as Chaitanya. One hour of yoga everyday energizes
                your mind and body for whole day. Embark in the path of bliss
                today, with the experienced instructors from the land of Yoga.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingcontent;
