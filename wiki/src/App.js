import React, { Component } from 'react';

import './App.css';
import getConcatArray from './wiki.js'


let words = ""
class App extends Component {


  componentWillMount() {
    getConcatArray()
      .then(concatArray => {
        console.log(concatArray)
        this.setState({
          words: concatArray,
          process: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate() {
    console.log('updated');
    if (this.state.process === true) {
      this.setState({
        updated: true
      })
    }
  }

  constructor() {
    super();
    this.state = {
      words: [],
      process: true,
      updated: false
    }
  }

  render() {


    let loadingAnim;

    if (this.state.process === true) {
      loadingAnim = (
        <div className="wrapper">
          <div className="line line1">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line2">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line3">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line4">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line5">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line6">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line7">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line8">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line9">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line10">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
          <div className="line line11">
            <span className="circle circle-top"></span>
            <div className="dotted">
              <span className="dot dot-top"></span>
              <span className="dot dot-middle-top"></span>
              <span className="dot dot-middle-bottom"></span>
              <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
          </div>
        </div>)
    }

    if (this.state.process === false) {
      loadingAnim = (this.state.words.map((element, int) => {

        let animation = {

          animationDuration: `${int / 2}s`,
          animationFillMode: "both",
          animationDelay: int,
          color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
          display: "block",
          padding: "10px",
          fontSize: "40px"
        }

        return <a target="_blank" href={"https://en.wikipedia.org/wiki/" + element.replace(/ /g, "_")} style={animation} className="slideInDown">{element}</a>
      }))
    }

    return (
      <div className="App">
        <div className="arrayDisplay">

          {loadingAnim}

        </div>
      </div>
    );
  }
}


export default App;
