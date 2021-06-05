import React, { Component } from "react";

class AboutYoga extends Component {
  render() {
    return (
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="../images/women.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              FIT FOR YOUR LIFESTYLE
            </h1>
            <p className="lead">
              Wake up with a sunrise meditation, sweat it out with lunchtime
              HIIT, or unwind with an evening flow. You’ll find movement for
              every mood with classNamees sorted by time, style, and skill
              level.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutYoga;
