import React, { Component } from "react";
import { signup } from "../actions/user";
// import { userSignupFail } from '../actions/user'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUp = e => {
    e.preventDefault();
    const newUser = this.state;
    this.props.signup(newUser.name, newUser.email, newUser.password);
  };

  componentDidUpdate() {}

  render() {
    return (
      <main id="main">
        <div className="newUser">
          <form id="newUser">

            <label id="name"> Name </label>
            <input
              name="name"
              type="text"
              onChange={this.handleChange}
              onfocus="this.value=''"
              id="usernameField"
            />

            <label id="email"> Email </label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              onfocus="this.value=''"
              id="usernameField"
            />

            <label id="password"> Password </label>
            <input
              name="password"
              type="text"
              onfocus="this.value=''"
              onChange={this.handleChange}
              id="passwordField"
            />

            <label> Sign up </label>
            <input
              id="submitNewUser"
              type="submit"
              value="Sign Up"
              onClick={this.handleSignUp}
            />
          </form>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {

  return {
    signupResult: state.users,

    user: {
      name: "",
      email: "",
      password: ""
    }
  };
};

const mapDispatchToProps = { signup };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
