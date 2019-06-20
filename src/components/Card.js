import React, { Component } from 'react';
class Card extends Component {


    render() {
        const { currentDogPicUrl, setBoop, getDogPics, boopStatus } = this.props
        return (

            <div className="card">
                <img src={currentDogPicUrl} width="100%" alt="doggo pics" onClick={setBoop}
                 />
                <button onClick={getDogPics}>Next pupper</button>
                <div id="boop-div"><h1>{boopStatus}</h1></div>
            </div>
        );
    }
}

export default Card;