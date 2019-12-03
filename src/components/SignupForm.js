import React, { Component } from "react";
import API from "../API";

class SignupForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  
  signUp = event => {
    event.preventDefault();
    API.signUp(this.state).then(this.props.history.push("/dogs"));
  };

  render() {
    return (
      <>
        {!this.props.currentUser && (
          <div>
            <h1>Sign Up</h1>
            <form onSubmit={this.signUp}>
              <label>
                Username
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  value={this.state.username}
                />
              </label>
              <label>
                Password
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
              </label>
              <button>Sign Up</button>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default SignupForm;
