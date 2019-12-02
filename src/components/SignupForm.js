import React, { Component } from "react";
import API from "../API";
import { isProperty } from "@babel/types";

const MYDOGSURL = "http://localhost:3001/dogs/";

class SignupForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  // handleSubmit = event => {
  //   event.preventDefault();
  //   API.signIn(this.state.username, this.state.password)
  //     .then(data => {
  //       // check if we got an error back
  //       if (data.error) throw Error(data.error);
  //       // here we know for sure that there was no error
  //       this.props.signIn(data);
  //     })
  //     .catch(error => console.log(error));
  // };

  signUp = event => {
    event.preventDefault();
    API.signUp(this.state).then(user => console.log(user));
    this.props.history.push("/dogs");
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
