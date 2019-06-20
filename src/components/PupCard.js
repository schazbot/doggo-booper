import React, { Component } from 'react';
class PupCard extends Component {


    render() {
        const { setBoop, deleteDogPic, pup } =
            this.props

        return (
            <div className="pup-card">
                <img
                    src={pup.url}
                    key={pup.id}
                    width="100%" alt="doggo pics"
                    onClick={setBoop} />

                <button onClick={() => deleteDogPic(pup)}>buh-bye pup</button>

            </div>
        )
            ;
    }
}

export default PupCard;