// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>Flip back to MPD slide, point out bandwidth and duration again</li>
            <li>Explain that mobile users have a high data cost, but enterprise is low</li>
            <li>My cost for hosting on DO is used in this example</li>
            <li>Explain strategies for initial estimation, MPD download speed, or client IP check to against OOKLA </li>
        </ul>
    )}>
        <Heading size={3} textColor="primary" caps>Cost of Viewing</Heading>
        <Text textColor="primary">Idea: Allow the user to specify how much money to spend to watch a video.</Text>
        <List>
            <Appear><ListItem>Use the MPD to calculate the size of each available representation</ListItem></Appear>
            <Appear><ListItem>Guess (?) at the unit cost of the users data</ListItem></Appear>
            <Appear><ListItem>Use the observed bandwidth to select best quality while remaining under cost</ListItem></Appear>
        </List>
    </Slide>
);

