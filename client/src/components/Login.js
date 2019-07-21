import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";

class Login extends Component {
  state = {
    login: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <main id="main">
        <div className="userLogin">
          <form id="email">
            <label id="email"> email: </label>
            <input
              name="email"
              type="text"
              onfocus="this.value=''"
              onChange={this.handleChange}
              id="emailField"
            />

            <label id="password"> password: </label>

            <input
              name="password"
              type="text"
              onfocus="this.value=''"
              onChange={this.handleChange}
              id="passwordField"
            />

            <input type="submit" value="Log In" onClick={this.handleLogin} />
          </form>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
