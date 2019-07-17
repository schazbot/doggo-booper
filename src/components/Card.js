import React, { Component } from 'react';
// const audio = new Audio("../Assets/booping.mp3")
import audio from "../Assets/booping.mp3"
class Card extends Component {

    state = {
        boopStatus: ""
    }

    playAudio = () => {
        this.green.play()
    }

    render() {
        const { currentDogPicUrl, getDogPics, currentDogName } = this.props
        const { boopStatus } = this.state

        return (
            <div className="card">
                <h2>Name: {currentDogName} </h2>
                <img src={currentDogPicUrl} width="300px" alt="doggo pics" onClick={this.playAudio}
                />
                <div></div>
                <button onClick={getDogPics}>Next pupper</button>
                <div id="boop-div"><h1>{boopStatus}</h1></div>
                <audio ref={(green) => { this.green = green; }}>
                    <source src={audio} type="audio/mpeg" >
                    </source>
                </audio>

            </div>
        );
    }
}

export default Card;