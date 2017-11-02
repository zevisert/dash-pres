// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Slide,
  Layout,
  Fill,
  Image
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <Layout>
            <Fill>
                <Heading size={3} textColor="primary" textAlign="Left">Outline</Heading>
                <List>
                    <ListItem>State of the Industry</ListItem>
                    <ListItem>Adaptive Streaming</ListItem>
                    <ListItem>DASH Specification</ListItem>
                    <ListItem>Adaptation Logic</ListItem>
                    <ListItem>Cost of Viewing</ListItem>
                    <ListItem>Conclusions</ListItem>
                </List>
            </Fill>
            <Fill>
                <Image padding="3em 0em 2em 1em"  width="100%" src="http://blog.xsn.com.mx/wp-content/uploads/2016/02/dash.jpg"></Image>
            </Fill>
        </Layout>
    </Slide>
);

