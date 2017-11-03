// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Image
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={(
        <ul>
            <li>Adobe, netflix, microsoft, google, have switched to dash</li>
            <li>Apple sticking with largely incompatible HLS</li>
            <li>MPEG CMAF on track to merge HLS in at the segment level</li>
        </ul>
    )}>
        <Heading size={3} textColor="secondary" caps>Conclusions</Heading>
        <Image width="100%" src="https://imgs.xkcd.com/comics/standards.png"/>
    </Slide>
);

