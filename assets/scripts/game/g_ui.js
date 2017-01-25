'use strict';

// const store = require('../store');
const picsTemplate = require('../templates/flash-card.handlebars');
const namesTemplate = require('../templates/name-list2.handlebars');
const gameLogic = require('../logic/game_logic.js');

const getAllPicturesSuccess = (data) => {
  console.log('get dem PICS succeess' + data);
  $('.flash-card-handlebars').html(picsTemplate(data));
  $('.name-list-handlebars').append(namesTemplate(data));
  // $('.name-input').on('click', gameLogic.addLogicEvents());
  gameLogic.addHandlers();
};

// const getAllNamesSuccess = (data) => {
//   console.log('get dem NAMES succeess' + data.names);
//   $('.name-list-handlebars').append(namesTemplate(data));

// };




const failure = (error) => {
};

module.exports = {
  getAllPicturesSuccess,
  // getAllNamesSuccess,
  failure,
};
