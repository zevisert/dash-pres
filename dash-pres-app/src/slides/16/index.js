// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Slide
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <Heading size={3} textColor="primary" caps>Conclusions</Heading>
        <List>
            <ListItem padding="0 0 0.5em 0">MPEG-DASH defines <span textColor="quartenary">formats only</span></ListItem>
            <ListItem padding="0 0 0.5em 0">MPEG-DASH is NOT a System, protocol, presentation, codec, DRM, or client specification</ListItem>
            <ListItem padding="0 0 0.5em 0">MPEG-DASH will replace proprietary ecosystems, flash, silverlight, and plugins</ListItem>
            <ListItem padding="0 0 0.5em 0">Extensible, rich, feature set: codecs, ads, DRM, multi-language audio and subtitles, VR/360, UHD, live, on-demand, analytics... </ListItem>
        </List>
    </Slide>
);

