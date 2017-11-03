// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Appear
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
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

