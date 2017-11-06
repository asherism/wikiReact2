import wiki from "wikijs";

let wikiArray = [];
let concatArray = [];
let newWordQuery = "";
let newWordArray = [];
let secondSearchArray = [];

function randomize() {
  return new Promise((resolve, reject) => {
    wiki()
      .random()
      .then(function(page) {
        //if random results ends in "disambiguation" run random again
        concatArray = wikiArray.concat(page);
        console.log("Starting thread...", concatArray);
      })
      .then(() => {
        let lastSentence = concatArray[concatArray.length - 1];
        // console.log(lastSentence + " B");

        let newWordQuery = lastSentence
          .split(" ")
          .pop()
          .replace(/[{()}]/g, "");
        //console.log(newWordQuery + " C");
        //concatArray.push(newWordQuery);
        resolve(newWordQuery);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getConcatArray() {
  return new Promise((resolve, reject) => {
    const randomPromise = randomize();

    randomPromise.then(newWordQuery => {
      randomSearch(newWordQuery, (err, concatArray) => {
        console.log(concatArray);
        return resolve(concatArray);
      });
    });
  });
}
// console.log(randomPromise)
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function randomSearch(randomPromise, cb) {
  //return new Promise((resolve, reject) => {
  wiki()
    .search(randomPromise, 100)
    .then(data => {
      // console.log(data.results);
      for (let i = 0; i < data.results.length; i++) {
        if (
          data.results[i].split(" ")[0] === randomPromise.capitalize() &&
          data.results[i].split(" ").length > 1 &&
          data.results[i].split(" ")[data.results[i].split(" ").length - 1] !==
            "(disambiguation)"
        ) {
          // console.log(data.results[i])
          newWordArray.push(data.results[i]);
          // pushing results into newWordArray to get random search query
        }
      }
      if (newWordArray.length > 1) {
        // console.log(newWordArray + " D")
        let secondSearchQeury =
          newWordArray[Math.floor(Math.random() * newWordArray.length)];
        concatArray.push(secondSearchQeury);
        let newSecondSearchQuery = secondSearchQeury
          .split(" ")
          .pop()
          .replace(/[{()}]/g, "");
        //let newWordQuery = newSecondSearchQuery;
        newWordArray = [];
        if (concatArray.length >= 10) {
          console.log("here");
          return cb(null, concatArray);
        }
        randomSearch(newSecondSearchQuery.capitalize(), cb);
        // console.log(newSecondSearchQuery + " E");
        console.log(concatArray);
      } else {
        wikiArray = [];
        concatArray = [];
        newWordQuery = "";
        newWordArray = [];
        secondSearchArray = [];
        //randomize();
        randomize().then(newWordQuery => {
          let searchPromise = randomSearch(newWordQuery, cb);
        });
      }
    });

  // })
}

export default getConcatArray;
