import wiki from 'wikijs';

let wikiArray = [];
let concatArray = [];
let newWordQuery = '';
let newWordArray = [];
let secondSearchArray = [];

let docObj;

document.addEventListener('DOMContentLoaded', () => {
  docObj = document.getElementsByClassName('arrayDisplay');
  console.log(docObj[0]);
});
const die = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
function randomize() {
  return new Promise((resolve, reject) => {
    wiki({
      // origin: "http://10.0.1.225:3000"
    })
      .random()
      .then((page) => {
        // if random results ends in "disambiguation" run random again
        concatArray = wikiArray.concat(page);
        console.log('Starting thread...', concatArray);
        docObj[0].insertAdjacentHTML(
          'beforeend',
          `<p>${die[Math.floor(Math.random() * die.length)]} New thread</p>`,
        );
        docObj[0].insertAdjacentHTML('beforeend', `<a>→ ${concatArray}</a>`);
        docObj[0].scrollTop = docObj[0].scrollHeight;
      })
      .then(() => {
        const lastSentence = concatArray[concatArray.length - 1];
        // console.log(lastSentence + " B");

        newWordQuery = lastSentence
          .split(' ')
          .pop()
          .replace(/[{()}]/g, '');
        // console.log(newWordQuery + " C");
        // concatArray.push(newWordQuery);
        resolve(newWordQuery);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// console.log(randomPromise)
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function randomSearch(randomPromise, cb) {
  // return new Promise((resolve, reject) => {
  wiki()
    .search(randomPromise, 100)
    .then((data) => {
      // console.log(data.results);
      for (let i = 0; i < data.results.length; i++) {
        if (
          data.results[i].split(' ')[0] === randomPromise.capitalize() &&
          data.results[i].split(' ').length > 1 &&
          data.results[i].split(' ')[data.results[i].split(' ').length - 1] !== '(disambiguation)'
        ) {
          // console.log(data.results[i])
          newWordArray.push(data.results[i]);
          // pushing results into newWordArray to get random search query
        }
      }
      if (newWordArray.length > 1) {
        // console.log(newWordArray + " D")
        const secondSearchQeury = newWordArray[Math.floor(Math.random() * newWordArray.length)];
        concatArray.push(secondSearchQeury);
        const newSecondSearchQuery = secondSearchQeury
          .split(' ')
          .pop()
          .replace(/[{()}]/g, '');
        // let newWordQuery = newSecondSearchQuery;
        newWordArray = [];
        if (concatArray.length >= 10) {
          console.log('here');
          return cb(null, concatArray);
        }
        randomSearch(newSecondSearchQuery.capitalize(), cb);
        // console.log(newSecondSearchQuery + " E");
        console.log(concatArray);
        docObj[0].insertAdjacentHTML('beforeend', `<a>${concatArray}</a>`);
        docObj[0].scrollTop = docObj[0].scrollHeight;
      } else {
        wikiArray = [];
        concatArray = [];
        newWordQuery = '';
        newWordArray = [];
        secondSearchArray = [];
        // randomize();
        randomize().then((newWordQuery) => {
          // const searchPromise =
          randomSearch(newWordQuery, cb);
        });
      }
    });

  // })
}

function getConcatArray() {
  return new Promise((resolve, reject) => {
    const randomPromise = randomize();

    randomPromise.then((newWordQuery) => {
      randomSearch(newWordQuery, (err, concatArray) => {
        console.log(concatArray);
        return resolve(concatArray);
      });
    });
  });
}

export { getConcatArray, concatArray };
