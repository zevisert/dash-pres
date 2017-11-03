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
            <li>Again, the DASH spec doesn't specify client side implementation</li>
            <li>We can implement our own adaptation logic</li>
            <li>Formula here is the bandwidth estimator that DASH-JS uses</li>
            <li>Go back slides to look at DASH js performance</li>
            <li>That is cost of the data required to download a video</li>
        </ul>
    )}>
        <Heading size={3} textColor="primary" caps fit>Adaptation Logic</Heading>
        <Text textColor="primary">What about optimizing for both cost and quality?</Text>
        <Appear><Image src="/bw-formula.PNG"></Image></Appear>
    </Slide>
);

