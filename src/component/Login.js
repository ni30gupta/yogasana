import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { userName: "", password: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.userName = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handlePasswordChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.password = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  render() {
    var { userName, password } = this.state.input;
    return (
      <div>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h3 className="display-4 fw-bold lh-1 mb-5 text-warning">
                AMOGH
              </h3>
              <p className="col-lg-10 fs-4">
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      “When the senses are stilled, when the mind is at rest,
                      when the intellect wavers not- then say the wise is
                      reached the highest stage. This steady control of the
                      senses and mind is defined as “Yoga”
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">Kathopanishad</cite>
                  </figcaption>
                </figure>
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={userName}
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={this.handlePasswordChange}
                    required
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Login
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  By clicking Login, you agree to the terms of use.
                </small>
                <a href={"Signup "} className="mx-3">
                  Click me to Signup
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
