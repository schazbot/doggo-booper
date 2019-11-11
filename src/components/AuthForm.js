import React, { Component } from "react";
import API from "../API";

class AuthForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });
g
  handleSubmit = event => {
    event.preventDefault();
    API.signIn(this.state.username, this.state.password)
      .then(data => {
        // check if we got an error back
        if (data.error) throw Error(data.error);
        // here we know for sure that there was no error
        this.props.signIn(data);
        this.props.history.push("/mydogs");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
