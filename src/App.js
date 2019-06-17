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
      .then(resp => resp.json()).then(data => this.setState({
        currentDogPicUrl: data.message[0],
        boopStatus: ""
      }))
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
        </div>
      </div>
    </>
  );
}

}
export default App;

