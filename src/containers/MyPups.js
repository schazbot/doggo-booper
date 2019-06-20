import React, { Component } from 'react';
import PupCard from "../components/PupCard"


class MyPups extends Component {
    render() {
        const { allMyPups, deleteDogPic, setBoop } = this.props
        return (<>
            <h1>All My Pups</h1>
            <div className="pup-grid">
                {allMyPups.map(pup => <PupCard
                    key={pup.id}
                    deleteDogPic={deleteDogPic}
                    onClick={setBoop}
                    pup={pup} />)}
            </div>
        </>);
    }
}

export default MyPups;