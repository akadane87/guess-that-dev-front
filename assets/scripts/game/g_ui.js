'use strict';

// const store = require('../store');
const picsTemplate = require('../templates/flash-card.handlebars');
const namesTemplate = require('../templates/name-list.handlebars');

const getAllPicturesSuccess = (data) => {
  console.log('get dem PICS succeess' + data);
  $('.flash-card-handlebars').html(picsTemplate(data)
  );
};

const getAllNamesSuccess = (data) => {
  console.log('get dem NAMES succeess' + data.names);
  $('.thingy').html(namesTemplate(data));
};

const failure = (error) => {
};

module.exports = {
  getAllPicturesSuccess,
  getAllNamesSuccess,
  failure,
};
