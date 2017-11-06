// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text,
  Image
} from "spectacle";

class Interactive extends React.Component {
    constructor() {
        super();
        this.state = {
            cycle: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            cycle: (prevState.cycle + 1) % 3
        }));
    }

    imageSwitch() {
        switch (this.state.cycle)
        {
            default:
            case 0:
                return (
                    <div>
                    <Image width="100%" src="adaptation-bitrate-2s.PNG"/>
                    <Text textColor="secondary" textSize="normal">
                        Bandwidth Adaptation with 2s segment size for (a) DASH-JS, (b) FESTIVE, (c) Instant, (d) Liu,
                        (e) Miller, (f) OSMF, (g) PANDA, (h) QDASH, (i) Thang, (j) Tian-Liu
                    </Text>
                    </div>
                );
            case 1:
                return (
                    <div>
                    <Image width="100%" src="adaptation-bitrate-10s.PNG"/>
                    <Text textColor="secondary" textSize="normal">
                        Bandwidth Adaptation with 10s segment size for (a) DASH-JS, (b) FESTIVE, (c) Instant, (d) Liu,
                        (e) Miller, (f) OSMF, (g) PANDA, (h) QDASH, (i) Thang, (j) Tian-Liu
                    </Text>
                    </div>
                );
            case 2:
                return (
                    <div>
                    <Image width="100%" src="adaptation-buffer.PNG"/>
                    <Text textColor="secondary" textSize="normal">
                        Buffer level for 2s and 10s segment size: (a, k) DASH-JS, (b, l) FESTIVE, (c, m) Instant, (d, n) Liu,
                        (e, o) Miller, (f, p) OSMF, (g, q) PANDA, (h, r) QDASH, (i, s) Thang, (j, t) Tian-Liu
                    </Text>
                    </div>
                );
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>
            { this.imageSwitch() }
            </div>
        );
    }
}

export default (
    <Slide transition={["slide"]} bgColor="white" textColor="secondary" notes={(
        <ul>
            <li>Well studied</li>
            <li>Suggest opening on own device</li>
 
                <ul>
                    <li>Black is shaped BW</li>
                    <li>Red is selected level</li>
                    <li>Blue is observed bandwidth</li>
                    <li>Green is buffer level</li>
                </ul>
   
        </ul>
    )}>
        <Heading margin="-2em 0 0 0" size={3} textColor="secondary" caps fit>Adaptation logic</Heading>
        <Interactive/>
    </Slide>
);

