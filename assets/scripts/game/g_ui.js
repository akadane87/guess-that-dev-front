'use strict';

// const store = require('../store');
const picsTemplate = require('../templates/flash-card.handlebars');
const namesTemplate = require('../templates/name-list2.handlebars');
const attemptGames = require('../templates/attempt-games.handlebars');
const gameLogic = require('../logic/game_logic.js');

const getAllPicturesSuccess = (data) => {
  console.log('get dem PICS succeess' + data);
  $('.flash-card-handlebars').html(picsTemplate(data));
  $('.name-list-handlebars').append(namesTemplate(data));
  gameLogic.addHandlers();
  $('#delete-attempts').show();
};

const postResponseSuccess = (data) => {
  console.log('post response success' + data);
};

const deleteAttemptSuccess = (id) => {
  $('.ufm-game').html("Game History Cleared");
  console.log("delete attempts success", + id);
};

const newAttemptSuccess = (data) => {
  console.log("new Attempt success" + data);
};

const getGamesSuccess = (data) => {
let whatvz = attemptGames({data:data});
  $('.ufm-game').html(whatvz);
  console.log('get dem GAMES succeess' + data);
};

const failure = (error) => {
  $('.ufm-game').html("Oops try again");
};

module.exports = {
  getAllPicturesSuccess,
  postResponseSuccess,
  newAttemptSuccess,
  deleteAttemptSuccess,
  failure,
  getGamesSuccess,
};
