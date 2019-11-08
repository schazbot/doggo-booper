import React, { Component } from "react";
import API from "../API";

class AuthForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

    handleSubmit = () => {
    API.signIn(this.state.username, this.state.password)
      .then(data => {
        // check if we got an error back
        if (data.error) throw Error(data.error)
        // here we know for sure that there was no error
          this.props.signIn(data.username);
          this.props.history.push('/dogs')
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
                <button onClick={() => this.props.signIn(this.state.username)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
