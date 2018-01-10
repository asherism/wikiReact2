import React, { Component } from 'react';

import { getConcatArray } from './wiki';

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
      'BlanchedAlmond',
      'BurlyWood',
      'Chartreuse',
      'Chocolate',
      'Coral',
      'Cornsilk',
      'Cyan',
      'DarkGoldenRod',
      'DarkKhaki',
      'Darkorange',
      'DarkSalmon',
      'DarkSeaGreen',
      'DarkTurquoise',
      'DeepPink',
      'DeepSkyBlue',
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
      'LightSkyBlue',
      'LightSteelBlue',
      'LightYellow',
      'Lime',
      'LimeGreen',
      'Linen',
      'Magenta',
      'MediumAquaMarine',
      'MediumSeaGreen',
      'MediumSpringGreen',
      'MediumTurquoise',
      'MintCream',
      'MistyRose',
      'Moccasin',
      'NavajoWhite',
      'OldLace',
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
      'Red',
      'RosyBrown',
      'Salmon',
      'SandyBrown',
      'SeaShell',
      'Silver',
      'SkyBlue',
      'Snow',
      'SpringGreen',
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
        <div className="arrayDisplay2">{loadingAnim}</div>
        <div className="arrayDisplay" />
      </div>
    );
  }
}

export default App;
