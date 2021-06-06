import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="p-3 bg-dark text-white mt-0">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-warning mr-3 text-decoration-none"
          >
            {" "}
            AMOGH
            {/* <img
              src="../images/AMOGH.PNG"
              class="bi me-2"
              width="40"
              height="32"
              role="img"
            /> */}
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" class="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                About
              </a>
            </li>
            <li>
              <a href="/instructors" class="nav-link px-2 text-white">
                {/* <Link to={"/instructors" }>Instructors</Link> */}Instructors
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                classes
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Contact us
              </a>
            </li>
          </ul>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              <Link to={"/login"} style={{ color: "white" }}>
                Login
              </Link>
            </button>
            <button type="button" class="btn btn-warning">
              <Link to={"/signup"}>Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
