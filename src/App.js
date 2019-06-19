import React, { Component } from 'react';
import Card from "./components/Card"
import "./App.css"

class App extends Component {
  state = {
    currentDogPicUrl: "",
    boopStatus: ""
  }

  componentDidMount() {
    this.getDogPics()
  }

  getDogPics = () => {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(data => this.setState({
        currentDogPicUrl: data.message[0],
        boopStatus: ""
      }))
  }

  saveDogPics = e => {
    e.preventDefault();
    fetch("tcp://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        url: this.state.currentDogPicUrl,
        user_id: 1
      })
    })
      .then(resp => resp.json())
  }

  setBoop = () => {
    this.setState({ boopStatus: "Boop!" })
  }


  render() {
    return (
      <>
        <div className="app-container">
          <div className="header">
            <h1>Boop the puppy on the nose</h1>
            <Card currentDogPicUrl={this.state.currentDogPicUrl} getDogPics={this.getDogPics} boopStatus={this.state.boopStatus} setBoop={this.setBoop} />
            <button onclick={this.saveDogPics()}>save pupper</button>
          </div>
        </div>
      </>
    );
  }

}
export default App;

