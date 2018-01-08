import React, { Component } from 'react';

import { getConcatArray, concatArray } from './wiki';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      process: true,
      updated: false,
    };
  }

  componentWillMount() {
    getConcatArray()
      .then((concatArray) => {
        // console.log(concatArray);
        this.setState({
          words: concatArray,
          process: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log('updated');
    if (this.state.process === true) {
      this.setState({
        updated: true,
      });
    }
  }

  render() {
    let loadingAnim;
    const colors = [
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue',
      'Brown',
      'BurlyWood',
      'CadetBlue',
      'Chartreuse',
      'Chocolate',
      'Coral',
      'CornflowerBlue',
      'Cornsilk',
      'Cyan',
      'DarkBlue',
      'DarkCyan',
      'DarkGoldenRod',
      'DarkGray',
      'DarkGrey',
      'DarkGreen',
      'DarkKhaki',
      'DarkMagenta',
      'Darkorange',
      'DarkRed',
      'DarkSalmon',
      'DarkSeaGreen',
      'DarkSlateBlue',
      'DarkSlateGray',
      'DarkSlateGrey',
      'DarkTurquoise',
      'DarkViolet',
      'DeepPink',
      'DeepSkyBlue',
      'DodgerBlue',
      'FloralWhite',
      'Fuchsia',
      'Gainsboro',
      'GhostWhite',
      'Gold',
      'GoldenRod',
      'GreenYellow',
      'HoneyDew',
      'HotPink',
      'IndianRed',
      'Indigo',
      'Ivory',
      'Khaki',
      'Lavender',
      'LavenderBlush',
      'LawnGreen',
      'LemonChiffon',
      'LightBlue',
      'LightCoral',
      'LightCyan',
      'LightGoldenRodYellow',
      'LightGray',
      'LightGrey',
      'LightGreen',
      'LightPink',
      'LightSalmon',
      'LightSeaGreen',
      'LightSkyBlue',
      'LightSlateGray',
      'LightSlateGrey',
      'LightSteelBlue',
      'LightYellow',
      'Lime',
      'LimeGreen',
      'Linen',
      'Magenta',
      'Maroon',
      'MediumAquaMarine',
      'MediumBlue',
      'MediumOrchid',
      'MediumSeaGreen',
      'MediumSpringGreen',
      'MediumTurquoise',
      'MidnightBlue',
      'MintCream',
      'MistyRose',
      'Moccasin',
      'NavajoWhite',
      'Navy',
      'OldLace',
      'OliveDrab',
      'Orange',
      'OrangeRed',
      'Orchid',
      'PaleGoldenRod',
      'PaleGreen',
      'PaleTurquoise',
      'PaleVioletRed',
      'PapayaWhip',
      'PeachPuff',
      'Peru',
      'Pink',
      'Plum',
      'PowderBlue',
      'Purple',
      'Red',
      'RosyBrown',
      'SaddleBrown',
      'Salmon',
      'SandyBrown',
      'SeaGreen',
      'SeaShell',
      'Sienna',
      'Silver',
      'SkyBlue',
      'Snow',
      'SpringGreen',
      'SteelBlue',
      'Tan',
      'Thistle',
      'Tomato',
      'Turquoise',
      'Violet',
      'Wheat',
      'White',
      'WhiteSmoke',
      'Yellow',
      'YellowGreen',
    ];

    if (this.state.process === true) {
      loadingAnim = <p>Loading...</p>;
    }

    if (this.state.process === false) {
      loadingAnim = this.state.words.map((element, index) => {
        const animation = {
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        return (
          <a
            target="_blank"
            href={`https://en.wikipedia.org/wiki/${element.replace(/ /g, '_')}`}
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
