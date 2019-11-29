import React, { Component } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import "./App.css";
import MyPups from "./containers/MyPups";
import { Route, withRouter } from "react-router-dom";

import UploadWidget from "./components/UploadWidget";
import AuthForm from "./components/AuthForm";
import API from "./API";

const MYDOGSURL = "http://localhost:3001/dogs/";

class App extends Component {
  state = {
    currentDogPicUrl: "",
    currentDogName: "",
    allMyPups: [],
    uploadedDogPic: "",
    username: ""
  };

  signIn = user => {
    this.setState({
      username: user.username
    });
    localStorage.setItem("token", user.token);
    this.props.history.push("/home");
  };

  signOut = () => {
    this.setState({
      username: ""
    });
    localStorage.removeItem("token");
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      API.validate().then(console.log);
    }
    this.getDogPics();
    this.getMyPups();
  }

  getRandomName = () => {
    API.getName().then(data =>
      this.setState({
        currentDogName: data.results[0].name.first
      })
    );
  };

  getDogPics = () => {
    API.dogPic()
      .then(data =>
        this.setState({
          currentDogPicUrl: data.message[0],
          boopStatus: ""
        })
      )
      .then(this.getRandomName());
  };

  getMyPups = () => {
    API.get(MYDOGSURL).then(data =>
      this.setState({
        allMyPups: data
      })
    );
  };

  saveDogPics = e => {
    e.preventDefault();
    API.post(MYDOGSURL, {
      url: this.state.currentDogPicUrl,
      name: this.state.currentDogName,
      user_id: 1
    })
      .then(newDoggo =>
        this.setState({ allMyPups: [...this.state.allMyPups, newDoggo] })
      )
      .then(alert("You saved this puppy!"));
  };

  updateDog = pup => {
    API.patch(MYDOGSURL, pup.id, {
      //adding the ++ before the variable value returns the new value
      boops: ++pup.boops
    }).then(updatedDog =>
      this.setState({
        allMyPups: this.state.allMyPups.map(dog =>
          dog.id === updatedDog.id ? updatedDog : dog
        )
      })
    );
  };

  deleteDogPic = dog => {
    API.destroy(MYDOGSURL, dog.id).then(
      this.setState({
        allMyPups: this.state.allMyPups.filter(doggo => doggo.id !== dog.id)
      })
    );
  };

  render() {
    const { getDogPics, setBoop, deleteDogPic, saveDogPics, updateDog } = this;
    const {
      currentDogName,
      boopStatus,
      currentDogPicUrl,
      allMyPups,
      username
    } = this.state;

    return (
      <>
        <div className="app-container">
          <div className="header">
            <NavBar signOut={this.signOut} username={this.state.username} />
            <h1>Boop the puppy on the nose</h1>
          </div>
          {!username ? (
            <Route
              path="/"
              component={routerProps => (
                <AuthForm
                  {...routerProps}
                  signIn={this.signIn}
                  signOut={this.signOut}
                />
              )}
            />
          ) : (
            <>
              <Route
                exact
                path="/home"
                component={routerProps => (
                  <>
                    <Card
                      {...routerProps}
                      currentDogPicUrl={currentDogPicUrl}
                      currentDogName={currentDogName}
                      getDogPics={getDogPics}
                      boopStatus={boopStatus}
                      setBoop={setBoop}
                    />
                    <button class="button" onClick={saveDogPics}>
                      save pupper
                    </button>
                  </>
                )}
              />
              <Route
                exact
                path="/dogs"
                component={routerProps => (
                  <MyPups
                    {...routerProps}
                    updateDog={updateDog}
                    allMyPups={allMyPups}
                    deleteDogPic={deleteDogPic}
                  />
                )}
              />
              <Route
                exact
                path="/upload"
                component={routerProps => (
                  <>
                    <UploadWidget
                      {...routerProps}
                      currentDogName={currentDogName}
                    />
                  </>
                )}
              />
            </>
          )}
        </div>
      </>
    );
  }
}
export default withRouter(App);
