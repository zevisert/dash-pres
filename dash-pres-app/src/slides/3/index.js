// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Slide,
  Appear
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>Remember the be thinking outside the browser here</li>
            <li>HLS, HDS, and MSS are all similar and employ some of the same ideas we'll see here</li>
            <li>Apple == Unsupported format</li>
            <li>Adobe == Unsupported protocol</li>
            <li>Adobe == plugin (flash)</li>
            <li>Everyone =?= Plugin requirement for DRM</li>
            <li>Everyone custom libraries, slow startup, buggy</li>
        </ul>
    )}>
        <Heading size={3} caps textColor="primary" margin="-1em 0 0 0">State of the Industry</Heading>
        <List>
            <ListItem>
                Many different streaming solutions
                <Appear><List padding="0 0 0 1em">
                    <ListItem>
                        Apple HLS
                    </ListItem>
                    <ListItem>
                        Adobe HDS
                    </ListItem>
                    <ListItem>
                        Microsoft Smooth Streaming
                    </ListItem>
                </List></Appear>
            </ListItem>
            <Appear><ListItem padding="1em 0 0 0">
                Common annoyances
                <List padding="0 0 0 1em">
                    <Appear><ListItem>
                        Unsupported format / protocol
                    </ListItem></Appear>
                    <Appear><ListItem>
                        Plugin requirement
                    </ListItem></Appear>
                    <Appear><ListItem>
                        Poor quality / stalls / long start-up
                    </ListItem></Appear>
                </List>
            </ListItem></Appear>
        </List>
    </Slide>
);

