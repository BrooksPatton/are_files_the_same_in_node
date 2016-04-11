"use strict";

const fs = require('fs');
const str = 'This is a sample text file. We are checking to see if this file is the same as another file.';

const textGottenFromFsSync = fs.readFileSync('test.txt', 'utf8');

fs.readFile('test.txt', 'utf8', (err, text) => {
  if(err){
    console.error(err);
  }
  else {
    console.log('the text: ', text);
    console.log('the str  : ', str);
    console.log('the text is equal to itself: ', text === text);
    console.log('the text is equal to a string: ', text === str);
    console.log('type of text: ', typeof text);
    console.log('type of str: ', typeof str);
    console.log('the text is the same as gotten from readFileSync: ', text === textGottenFromFsSync);
  }

  fs.readFile('test.txt', 'utf8', (err, textAgain) => {
    if(err){
      console.error(err);
    }
    else {
      console.log('the text again: ', textAgain);
      console.log('the text is the same when gotten through another fs process: ', text === textAgain);
    }
  });

});;
