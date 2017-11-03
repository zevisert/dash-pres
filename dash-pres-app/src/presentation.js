// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

// Import theme
import { theme } from "./slides/theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const numSlides = 17;
const slidesImports = Array.from(Array(numSlides).keys()).map(key => import(`./slides/${key}`));

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />) // A placeholder for slides once they're loaded.
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      {
        slides.map((slide, index) => {
          return React.cloneElement(slide, {key: index});
        })
      }
      </Deck>
    );
  }
}