// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Image
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>Big players in media delivery are YouTube, Netflix, Spotify</li>
            <li>But we're seeing a growing trend in OTT, amazon video, hulu, google movies etx</li>
            <li>Could expect Snapchat / instagram to utilize dash soon</li>
            <li>Streaming audio and video makes up 70! % of all internet traffic at peak periods</li>
        </ul>
    )}>
        <Heading size={3} caps textColor="primary" margin="-1em 0 0 0">State of the Industry</Heading>
        <Image height="20em" src="http://2oqz471sa19h3vbwa53m33yj.wpengine.netdna-cdn.com/wp-content/uploads/2017/08/one-internet-minute.png"/>
    </Slide>
);

