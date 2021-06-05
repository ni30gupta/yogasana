import React, { Component } from "react";
import "./Whyus.css";
import { FcBusinesswoman } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcPrivacy } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

class Whyus extends Component {
  render() {
    return (
      <section id="services" class="section-bg">
        <div class="container">
          <header class="section-header">
            <h3 className="text-center mb-4">Why Amogh</h3>
            <p className="text-center my-3">
              Get online live sessions from best of the instructors directly
              from the land of Yoga
            </p>
          </header>

          <div class="row">
            <div
              class="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div class="box">
                <div class="icon" style={{ background: "#fceef3" }}>
                  <FcBusinesswoman
                    class="ion-ios-analytics-outline"
                    size="20"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 class="title">
                  <a href="">Best Instructors</a>
                </h4>
                <p class="description">
                  Choose from the list of expert instructors with more than +900
                  hrs of Experience.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div class="box">
                <div class="icon" style={{ background: "#fff0da" }}>
                  <FcHome
                    class="ion-ios-analytics-outline"
                    size="20"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 class="title">
                  <a href="">No Commutation</a>
                </h4>
                <p class="description">
                  Practice yoga and learn to remain fit at comfort of your home.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                <div class="icon" style={{ background: "#eafde7" }}>
                  <FcComboChart
                    class="ion-ios-analytics-outline"
                    size="20"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 class="title">
                  <a href="">Set goals and monitor progress</a>
                </h4>
                <p class="description">
                  Platform provides all the means to set your goals and check
                  you progress digitally via dashboard.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                <div class="icon" style={{ background: "#e6fdfc" }}>
                  <FcPrivacy
                    class="ion-ios-analytics-outline"
                    size="20"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 class="title">
                  <a href="">Privacy and choice of time</a>
                </h4>
                <p class="description">
                  A real time software program that controls booking,
                  cancellation of slots, sending of messages and emails on
                  confirmation of any of event and reminders before starting of
                  service of any kind.
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                <div class="icon mb-2" style={{ background: "#e1eeff" }}>
                  <FcServices
                    class="ion-ios-analytics-outline"
                    size="20"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 class="title mb-1">
                  <a href="">Personalized service</a>
                </h4>
                <p class="description">
                  Get in touch with the instructors anytime to receive feedback
                  for self-Improvement. The user before booking for service can
                  state his/her pain, injury or concern while booking of the
                  slot to receive proper guidance from the instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Whyus;
