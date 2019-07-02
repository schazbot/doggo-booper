import React, {Component} from 'react';
const audio = new Audio("../Assets/booping.mp3")
this.sfxRef = React.createRef();

class Sfx extends Component {
render() {
    return (<audio ref={this.sfxRef} src={audio} autoPlay />);
}
}

export default Sfx;
