import React, { Component } from 'react';
class Card extends Component {

    state = {
        boopStatus: ""
    }

    setBoop = () => {
        this.setState({ boopStatus: "Boop!" })
      }
    

    render() {
        const { currentDogPicUrl, getDogPics, currentDogName } = this.props
        const {setBoop} = this
        const {boopStatus} = this.state


        return (

            <div className="card">
                <h2>Name: {currentDogName} </h2>
                <h2>Total Boops:</h2>
                <img src={currentDogPicUrl} width="300px" alt="doggo pics" onClick={setBoop}
                 />
                 <div></div>
                <button onClick={getDogPics}>Next pupper</button>
                <div id="boop-div"><h1>{boopStatus}</h1></div>
            </div>
        );
    }
}

export default Card;