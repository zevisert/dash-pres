// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text,
  Image,
  Appear
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>ci is cost of ith representation if watched to completion</li>
            <li>cd is cost of a unit of data downloaded - relative to client</li>
            <li>si is size of ith representation</li>
            <li>qs is quality to be selected</li>
            <li>qi is quality of ith representation</li>
            <li>bn is bandwidth expected as shown previously</li>
        </ul>
    )}>
        <Heading size={3} textColor="primary" caps>Cost of Viewing</Heading>
        <Text textColor="primary">Idea: Allow the user to specify how much money to spend to watch a video.</Text>
        <Appear><Image src="/cost-formula-pre.png"/></Appear>
        <Appear><Image src="/cost-formula.png"/></Appear>
    </Slide>
);

