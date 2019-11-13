import React, { Component } from "react";
class PupCard extends Component {
  state = {
    boopStatus: ""
  };

  setBoop = () => {
    this.setState({ boopStatus: "Boop!" });
    this.props.pup.boops++;
  };

  render() {
    const { deleteDogPic, pup, updateDog } = this.props;

    const { boopStatus } = this.state;
    return (
      <div className="pup-card">
        <h2>Name: {pup.name}</h2>
        <h4>Boops: {pup.boops}</h4>
            <div className="img-div">
          <img
            src={pup.url}
            key={pup.id}
            width="100%"
            alt="doggo pics"
            onClick={() => updateDog(pup)}
          />
        </div>
        <div id="boop-div">
          <h1>{boopStatus}</h1>
        </div>
        <button id="button-delete" onClick={() => deleteDogPic(pup)}>
          buh-bye pup
        </button>
      </div>
    );
  }
}
export default PupCard;
