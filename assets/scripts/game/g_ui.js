'use strict';

// const store = require('../store');
const picsTemplate = require('../templates/flash-card.handlebars');
const namesTemplate = require('../templates/name-list2.handlebars');
const attemptGames = require('../templates/attempt-games.handlebars');
const gameLogic = require('../logic/game_logic.js');

const getAllPicturesSuccess = (data) => {
  // debugger;
  console.log('get dem PICS succeess' + data);
  $('.flash-card-handlebars').html(picsTemplate(data));
  $('.name-list-handlebars').append(namesTemplate(data));
  $('.name-response').addClass('not-clickable');
  gameLogic.addHandlers();
  $('#delete-attempts').show();
  // $('#new-attempt').show();
  // let dataPost = store.data;
  // $('#create-game').hide();
};

const postResponseSuccess = (data) => {
  console.log('post response success' + data);
};

const deleteAttemptSuccess = (id) => {
  console.log("delete attempts success", + id);
};

const newAttemptSuccess = (data) => {
  console.log("new Attempt success" + data);
  $('.ufm-game').html(attemptGames(data));
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
