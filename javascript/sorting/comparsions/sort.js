'use strict';

const { mainModule } = require('process');

const { Movies } = require('./movies');

function sortYear(arr) {
  arr.sort(compareYear);
}

function compareYear(a, b) {
  if (a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else {
    return 0;
  }
}

function sortTitle(arr) {
  arr.sort(compareTitle);
}

function compareTitle(a, b) {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = { sortYear, compareYear, sortTitle, compareTitle };
