// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Image,
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>Focus on Quick-startup to differentiate this slide from the previous one</li>
            <li>Just need to send one request to fetch MPD to get started</li>
        </ul>
    )}>
        <Heading size={3} caps textColor="primary" margin="-1em 0 0 0">Adaptive Streaming</Heading>
        <Image width="100%" src="/multi-bitrate-encoding.png"></Image>
    </Slide>
);

