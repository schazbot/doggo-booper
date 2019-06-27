import React, { Component } from 'react';
const MYDOGSURL = "http://localhost:3001/dogs/"


class UploadWidget extends Component {

    state = {
        dogUrl: ""
    }

    showWidget = (widget) => {
        widget.open()
    }

    uploadDogPic = () => {
        if (this.state.dogUrl) {
            fetch(MYDOGSURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    url: this.state.url,
                    name: this.props.currentDogName,
                    user_id: 1
                })
            })
        } else {console.log("nope")}

    }

    render() {
        const widget = window.cloudinary.openUploadWidget({
            cloudName: "dmn1rk00r", uploadPreset: "jyzlvdex"
        }, (error, result) => {
            if (result.event === 'success') { this.setState({ dogUrl: result.info.url }) }
            else { console.log(error) }
        });




        return (<div className="photo-form-container">
        </div>);
    }
}

export default UploadWidget;