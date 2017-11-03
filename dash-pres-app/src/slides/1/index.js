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
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary"
    notes={(
        <ul>
            <li>For times sake, don't go too deep into each item, maybe one sentence each</li>
            <li>We'll start with a bit of motivation on why DASH was developed</li>
            <li>Then we'll talk about what adaptive streaming is</li>
            <li>And exactly what is involved in the DASH specification</li>
            <li>in that we'll discuss how the adaptation logic works</li>
            <li>Lastly we'll see a new application of the dash logic, in tracking costs</li>
            <li>Then as we wrap up we'll see about the industry today and what's next</li>
        </ul>
    )}>
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

