// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Slide
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <iframe
            title="uvic_dji"
            style={{
                height: "25em",
                border: "none",
                marginTop: "-3em"
            }}
            width="100%"
            src="https://dash.nyc3.digitaloceanspaces.com/uvic_dji/demo.html">
        </iframe>
    </Slide>
);

