import React, { Component } from "react";

import getConcatArray from "./wiki.js";

let words = "";
class App extends Component {
  componentWillMount() {
    getConcatArray()
      .then(concatArray => {
        console.log(concatArray);
        this.setState({
          words: concatArray,
          process: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log("updated");
    if (this.state.process === true) {
      this.setState({
        updated: true
      });
    }
  }

  constructor() {
    super();
    this.state = {
      words: [],
      process: true,
      updated: false
    };
  }

  render() {
    let loadingAnim;
    let colors = [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGrey",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "Darkorange",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkSlateGrey",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DodgerBlue",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGrey",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSlateGrey",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumSeaGreen",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "Red",
      "RosyBrown",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateGray",
      "SlateGrey",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen"
    ];

    if (this.state.process === true) {
      loadingAnim = <p>Loading...</p>;
    }

    if (this.state.process === false) {
      loadingAnim = this.state.words.map((element, index) => {
        let animation = {
          animationDuration: `${index / 2}s`,
          animationFillMode: "both",
          animationDelay: index,
          color: colors[Math.floor(Math.random() * colors.length)],
          display: "block",
          padding: "10px",
          fontSize: "40px"
        };

        return (
          <a
            target="_blank"
            href={"https://en.wikipedia.org/wiki/" + element.replace(/ /g, "_")}
            style={animation}
            className="slideInDown"
            key={index}
          >
            {index + 1}. {element} 🔗
          </a>
        );
      });
    }

    return (
      <div className="App">
        <div className="arrayDisplay">{loadingAnim}</div>
      </div>
    );
  }
}

export default App;
