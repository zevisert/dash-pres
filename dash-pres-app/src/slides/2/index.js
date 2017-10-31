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
        <Heading size={6} caps textColor="primary">Standard List</Heading>
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
        </List>
    </Slide>
);

