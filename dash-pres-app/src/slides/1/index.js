// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <Heading size={6} caps textColor="primary">Typography</Heading>
        <Heading size={1} textColor="primary">Heading 1</Heading>
        <Heading size={2} textColor="primary">Heading 2</Heading>
        <Heading size={3} textColor="primary">Heading 3</Heading>
        <Heading size={4} textColor="primary">Heading 4</Heading>
        <Heading size={5} textColor="primary">Heading 5</Heading>
        <Text size={6} textColor="primary">Standard text</Text>
    </Slide>
);

