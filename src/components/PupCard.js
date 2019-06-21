import React, { Component } from 'react';
class PupCard extends Component {

    state = {
        boopStatus: ""
    }

    setBoop = () => {
        this.setState({ boopStatus: "Boop!" })
    }


    render() {
        const { deleteDogPic, pup } =
            this.props
        const { setBoop } = this
        const {boopStatus} = this.state


        return (
            <div className="pup-card">
                <h2>Name: {pup.name}</h2>
                <img
                    src={pup.url}
                    key={pup.id}
                    width="100%"
                    alt="doggo pics"
                    onClick={setBoop} />
                <div id="boop-div"><h1>{boopStatus}</h1></div>
                <button onClick={() => deleteDogPic(pup)}>buh-bye pup</button>

            </div>
        )
            ;
    }
}

export default PupCard;