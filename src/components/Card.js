import React, { Component } from 'react';
class Card extends Component {


    render() {
        return (
            <div className="card">
                <img src={this.props.currentDogPicUrl}  width="100%" alt="doggo pics" onClick={this.props.setBoop}/>
                <button onClick={this.props.getDogPics}>Next pupper</button>
                <div id="boop-div"><h1>{this.props.boopStatus}</h1></div>
            </div>
        );
    }
}

export default Card;