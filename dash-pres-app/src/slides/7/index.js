// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Heading,
    Slide,
    Image,
    CodePane
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary"
        notes={(
            <ul>
                <li>Splicing of arbitrary content - like ads</li>
                <li>Selection of components / tracks</li>
                <li>Selection of representations</li>
                <li>Well defined media format</li>
                <li>Chunks with addresses and timing</li>
            </ul>
        )}
    >
        <Heading size={3} caps textColor="primary" margin="-1em 0 0 0">MPEG DASH Data Model</Heading>
        <Image width="100%" src="/dash-data-model.png"></Image>
    </Slide>
);

