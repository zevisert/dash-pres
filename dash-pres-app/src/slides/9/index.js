// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text,
  Layout,
  Fill,
  Appear
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li>Point out that the client implementation isn't specififed</li>
            <li>Mention what DASH-IF does</li>
            <li>Creates interoperability guidelines on the usage of the MPEG-DASH streaming standard,
                promotes and catalyze the adoption of MPEG-DASH and help transition it from a specification
                into a real business.</li>
            <li>It consists of the major streaming and media companies, such as Microsoft, Netflix, 
                Google, Ericsson, Samsung and Adobe.</li>
        </ul>
    )}>
        <Heading size={3} textColor="primary" caps fit>Adaptation Logic</Heading>
        <Text textColor="tertiary" padding="0 0 2em 0">Note from what we've seen so far that adaptation logic is unspecified.</Text>
        <Layout>
            <Appear>
                <Fill>
                    <Heading size={5} textColor="primary">Adaptation Problem</Heading>
                    <Text textColor="primary">
                        Choose a sequence and schedule requests to minimize probablility of re-buffers and maximize quality. 
                    </Text>
                </Fill>
            </Appear>
        </Layout>
    </Slide>
);

