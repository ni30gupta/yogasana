import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./InstructorsPage.css";
import Data from "../API/data.json";
import AboutYoga from "../component/AboutYoga";

class InstructorsPage extends Component {
  render() {
    return (
      <div className="container marketing mt-5">
        <AboutYoga />
        <div className="row">
          {Data.map((post) => {
            return (
              <div className="col-lg-4">
                <img
                  className="Home"
                  src={post.imgsrc}
                  alt=""
                  width="200"
                  height="200"
                />
                <title>{post.id}</title>
                <rect width="100%" height="100%" fill="#777" />

                <h2>{post.name}</h2>
                <p>{post.description}</p>
                <p>
                  <a className="btn btn-secondary" href="/101">
                    <Link to={`/${post.id}/profile`} style={{ color: "white" }}>
                      {" "}
                      View details &raquo;
                    </Link>
                  </a>{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default InstructorsPage;
