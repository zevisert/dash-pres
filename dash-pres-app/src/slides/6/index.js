// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Image,
  Text
} from "spectacle";

class Interactive extends React.Component {
    constructor() {
        super();
        this.state = {
            toggled: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.info("Clicked");
        this.setState(prevState => ({
            toggled: !prevState.toggled
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
            {
                this.state.toggled ? 
                <Image width="100%" src="/dash-components-specified.png"/> :
                <Image width="100%" src="/dash-components.png"/>
            }
            </div>
        );
    }
}

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>Click to show highlighting</li>
            <li>Left
                <ul>
                    <li>different representations</li>
                    <li>HTTP Server </li>
                </ul>
            </li>
            <li>Right
                <ul>
                    <li>Core components in any dash player</li>
                    <li>Media engine in browsers is the MSE</li>
                    <li>Dash control engine in browsers is JS</li>
                </ul>
            </li>
            <li>MPD is just a method of sharing what's on the server</li>
            <li>HTTP is in the name but could be replaced with HTTP2 or CCN</li>
        </ul>
    )}>
        <Heading size={3} caps textColor="primary" margin="-1em 0 0 0">MPEG DASH Specification</Heading>
        <Text textColor="primary">What is specified?</Text>
        <Interactive/>
    </Slide>
);

