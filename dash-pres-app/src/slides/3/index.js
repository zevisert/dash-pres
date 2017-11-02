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
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
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

