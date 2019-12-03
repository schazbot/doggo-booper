import React, { Component } from "react";
import PupCard from "../components/PupCard";

class MyPups extends Component {
  render() {
    const { allMyPups, deleteDogPic, updateDog } = this.props;
    return (
      <>
        <h1>All My Pups</h1>
        <div className="pup-grid">
          {allMyPups ? (
            allMyPups.map(pup => (
              <PupCard
                key={pup.id}
                deleteDogPic={deleteDogPic}
                updateDog={updateDog}
                pup={pup}
              />
            ))
          ) : (
            <h1>Save some puppies!</h1>
          )}
        </div>
      </>
    );
  }
}

export default MyPups;
