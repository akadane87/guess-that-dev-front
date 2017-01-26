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
  $('#delete-attempts').show();
  // let dataPost = store.data;

};

const postResponseSuccess = (data) => {
  console.log('post response success' + data);
};

const deleteAttemptSuccess = (id) => {
  console.log("delete attempts success", + id);
};

const newAttemptSuccess = (id) => {
  console.log("delete nipples success", + id);
};



const failure = (error) => {
};

module.exports = {
  getAllPicturesSuccess,
  postResponseSuccess,
  newAttemptSuccess,
  deleteAttemptSuccess,
  failure,
};
