import React, { Component } from 'react';
import Card from "./components/Card"
import NavBar from "./components/NavBar"
import "./App.css"
import MyPups from './containers/MyPups';
import { Route } from "react-router-dom";


const DOGAPI = "https://dog.ceo/api/breeds/image/random/4"
const MYDOGSURL = "http://localhost:3001/dogs/"

class App extends Component {
  state = {
    currentDogPicUrl: "",
    boopStatus: "",
    allMyPups: []
  }

  componentDidMount() {
    this.getDogPics()
    this.getMyPups()
  }

  getDogPics = () => {
    return fetch(DOGAPI)
      .then(resp => resp.json())
      .then(data => this.setState({
        currentDogPicUrl: data.message[0],
        boopStatus: ""
      }))
  }

  getMyPups = () => {
    return fetch(MYDOGSURL)
      .then(resp => resp.json())
      .then(data => this.setState({
        allMyPups: data
      }))
  }

  saveDogPics = e => {
    e.preventDefault();
    fetch(MYDOGSURL, {
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
      .then(newDoggo => this.setState({ allMyPups: [...this.state.allMyPups, newDoggo] }))
  }

  deleteDogPic = dog => {
    fetch(MYDOGSURL + `${dog.id}`, { method: "DELETE" }).then(this.setState({
      allMyPups: this.state.allMyPups.filter(doggo => doggo.id !== dog.id)
    }))
  }



  setBoop = () => {
    this.setState({ boopStatus: "Boop!" })
  }


  render() {
    return (
      <>
        <div className="app-container">
          <NavBar/>
          <h1>Boop the puppy on the nose</h1>
          <div className="header">
            <Route exact
              path="/"
              render={() => {
                return (<>
                  <Card currentDogPicUrl={this.state.currentDogPicUrl}
                    getDogPics={this.getDogPics}
                    boopStatus={this.state.boopStatus}
                    setBoop={this.setBoop} />

                  <button onClick={this.saveDogPics}>save pupper</button>
                </>)
              }} />
            <Route exact
              path="/dogs"
              render={() => {
                return (<>
                  <MyPups allMyPups={this.state.allMyPups} deleteDogPic={this.deleteDogPic} />
                </>)
              }} />


          </div>
        </div>
      </>
    );
  }

}
export default App;

