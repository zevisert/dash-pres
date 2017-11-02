// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Slide
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <iframe
            style={{
                height: "25em",
                border: "none",
                marginTop: "-3em"
            }}
            width="100%"
            src="https://dash.nyc3.digitaloceanspaces.com/uvic_dji/index.html">
        </iframe>
    </Slide>
);

