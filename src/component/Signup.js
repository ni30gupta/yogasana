import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        fullName: "",
        userName: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange =
      this.handleConfirmPasswordChange.bind(this);
  }
  handleChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.fullName = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handleUserChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.userName = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handleEmailChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.email = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handleContactChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.contactNumber = evt.target.value;
    this.setState({ input: updatedInput });
  }
  handlePasswordChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.password = evt.target.value;
    this.setState({ input: updatedInput });
  }
  handleConfirmPasswordChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.confirmPassword = evt.target.value;
    this.setState({ input: updatedInput });
  }
  render() {
    var {
      fullName,
      userName,
      email,
      contactNumber,
      password,
      confirmPassword,
    } = this.state.input;
    return (
      <div class="container containerMain5 mt-5 " style={{ maxWidth: "960px" }}>
        <div class="col mainColumn">
          <h4 class="mb-3">Please Sign-up</h4>
          <form class="needs-validation" method="POST" modelAttribute="user">
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Full name</label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Name"
                    value={fullName}
                    onChange={this.handleChange}
                    required
                  />
                  <div class="invalid-feedback">Full name is required.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="user">User name</label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    name="userName"
                    id="userName"
                    placeholder="@userName"
                    value={userName}
                    onChange={this.handleUserChange}
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="e-mail">E-mail</label>{" "}
                  <input
                    type="email"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    class="form-control"
                    name="email"
                    id="e-mail"
                    placeholder="you@example.com"
                    value={email}
                    onChange={this.handleEmailChange}
                    required
                  />
                  <div class="invalid-feedback">Email is required.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="contact">Contact-Number</label>{" "}
                  <input
                    type="text"
                    name="mobile"
                    data-validation="number"
                    data-validation-allowing="negative,number"
                    input
                    name="color"
                    data-validation="number"
                    datavalidation-ignore="$"
                    required="required"
                    class="form-control"
                    id="phone_no"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={this.handleContactChange}
                    minlength="10"
                    maxlength="10"
                  />
                  <div class="invalid-feedback">
                    Valid mobile number is required.
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="col-md-5">
                    <label for="country" class="form-label">
                      Gender
                    </label>
                    <select class="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Others</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select your gender
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="col-md-5">
                    <label for="country" class="form-label">
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      data-validation="number"
                      data-validation-allowing="negative,number"
                      input
                      name="color"
                      data-validation="number"
                      datavalidation-ignore="$"
                      required="required"
                      class="form-control"
                      id="phone_no"
                      placeholder="Age"
                      minlength="2"
                      maxlength="2"
                    />
                    <div class="invalid-feedback">Please give your age</div>
                  </div>
                  <div class="invalid-feedback">password is required.</div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="password">Password</label>{" "}
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="password"
                    placeholder=""
                    value={password}
                    onChange={this.handlePasswordChange}
                    required
                  />
                  <div class="invalid-feedback">password is required.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="confirmpassword">Confirm Password</label>{" "}
                  <input
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    id="confirmpassword"
                    placeholder=""
                    value={confirmPassword}
                    onChange={this.handleConfirmPasswordChange}
                    required
                  />
                  <div class="invalid-feedback">password is required.</div>
                </div>
              </div>
            </form>
          </form>
        </div>
        <p className="my-5 alert alert-warning">
          Please write if you have any health information that you would like to
          share with the Instructors, so that instructors could understand your
          limitations (For instance any injury, illness, or have gone through
          any surgery recently.
        </p>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div className="mt-4">
          <p>
            1. I will practice Yoga according to my physical abilities, and I
            have entire liability for my practice.
          </p>
          <p>
            2. I understand that I must tell instructor if I have any injury or
            illness, which will affect my yoga practice.
          </p>
          <p>
            3. I understand that in case of any injury or accident, I solemnly
            have a liability to the consequences and regardless of the reasons,
            instructors and other concerned people have no liability
          </p>
        </div>
        <section>
          <p>
            Please find all the terms and conditions here:{" "}
            <span>
              <a href="#">Terms & Conditions</a>
            </span>
          </p>
        </section>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            I have read and agree to the terms above
          </label>
        </div>
        <hr class="mb-4" />
        <div class="text-center my-5">
          <button
            class="btn btn-primary px-5"
            type="submit"
            style={{ width: "50%;" }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
