// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Slide,
    Heading,
    Text,
    Layout,
    Fill,
    Image,
    Appear
} from "spectacle";

export default (
    <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes={(
        <ul>
            <li> Take time here on each animation, explain how the plots are broken down</li>
            <li> After all plots are on screen talk about naivity of the selection algorithm here</li>
            <li> In reality the uptime after a segment is requested is immediately used to download the next</li>
        </ul>
    )}>
        <Heading size={3} caps textColor="primary" margin="-1em 0 0 0">Adaptive Streaming</Heading>
        <Layout>
            <Appear>
            <Fill>
                <Image padding="1em" src="adaptive-streaming-server.PNG" width="100%"></Image>
                <div style={{border: "solid", margin: "0.5em"}}>
                    <Heading textColor="primary" size={5}>Server</Heading>
                    <Text textSize="1.1rem" textColor="primary">HTTP Server with multiple encodings of content</Text>
                </div>
            </Fill>
            </Appear><Appear>
            <Fill>
                <Image padding="1em" src="adaptive-streaming-bandwidth.PNG" width="100%"></Image>
                <div style={{border: "solid", margin: "0.5em"}}>
                    <Heading textColor="primary" size={5}>Network</Heading>
                    <Text textSize="1.1rem" textColor="primary">Internet network prone to bandwidth fluctuations</Text>
                </div>
            </Fill>
            </Appear><Appear>
            <Fill>
                <Image padding="1em" src="adaptive-streaming-client.PNG" width="100%"></Image>
                <div style={{border: "solid", margin: "0.5em"}}>
                    <Heading textColor="primary" size={5}>Client</Heading>
                    <Text textSize="1.1rem" textColor="primary">Client player requests highest bitrate content</Text>
                </div>
            </Fill>
            </Appear>
        </Layout>
    </Slide>
);

