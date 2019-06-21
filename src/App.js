import React, { Component } from 'react';
import Card from "./components/Card"
import NavBar from "./components/NavBar"
import "./App.css"
import MyPups from './containers/MyPups';
import { Route } from "react-router-dom";


const DOGAPI = "https://dog.ceo/api/breeds/image/random/4"
const MYDOGSURL = "http://localhost:3001/dogs/"
const NAMEURL = "https://api.randomuser.me/"

class App extends Component {
  state = {
    currentDogPicUrl: "",
    currentDogName: "",
    allMyPups: []
  }

  componentDidMount() {
    this.getDogPics();
    this.getMyPups()
  }

  getRandomName = () => {
    return fetch(NAMEURL)
      .then(resp => resp.json())
      .then(data => this.setState({
        currentDogName: data.results[0].name.first
      }))
  }

  getDogPics = () => {
    return fetch(DOGAPI)
      .then(resp => resp.json())
      .then(data => this.setState({
        currentDogPicUrl: data.message[0],
        boopStatus: ""
      })).then(this.getRandomName())
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
        name: this.state.currentDogName,
        user_id: 1
      })
    })
      .then(resp => resp.json())
      .then(newDoggo => this.setState({ allMyPups: [...this.state.allMyPups, newDoggo] }))
  }

  updateDog = pup => {
    fetch(MYDOGSURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        boops: pup.boops
      })
    })
  }

  deleteDogPic = dog => {
    fetch(MYDOGSURL + `${dog.id}`, { method: "DELETE" }).then(this.setState({
      allMyPups: this.state.allMyPups.filter(doggo => doggo.id !== dog.id)
    }))
  }



  setBoop = (pup) => {
    this.updateDog(pup)
    this.setState({ boopStatus: "Boop!" })
  }




  render() {
    const { getDogPics, setBoop, deleteDogPic, saveDogPics, updateDog } = this
    const { currentDogName, boopStatus, currentDogPicUrl, allMyPups } = this.state
    return (
      <>
        <div className="app-container">
          <NavBar />
          <h1>Boop the puppy on the nose</h1>
          <div className="header">
            <Route exact
              path="/"
              render={() => {
                return (<>
                  <Card currentDogPicUrl={currentDogPicUrl}
                    currentDogName={currentDogName}
                    getDogPics={getDogPics}
                    boopStatus={boopStatus}
                    setBoop={setBoop} />

                  <button onClick={saveDogPics}>save pupper</button>
                </>)
              }} />
            <Route exact
              path="/dogs"
              render={() => {
                return (<>
                  <MyPups updateDog={updateDog} allMyPups={allMyPups} deleteDogPic={deleteDogPic} />
                </>)
              }} />


          </div>
        </div>
      </>
    );
  }

}
export default App;

