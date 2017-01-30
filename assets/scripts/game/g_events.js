'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const g_api = require('./g_api');
const g_ui = require('./g_ui');
const store = require('../store');


const onGetAllPictutes = (event) => {
  console.log('Get All Pics EVENTS');
  event.preventDefault();
  g_api.getAllPictures()
    .then(g_ui.getAllPicturesSuccess)
    .catch(g_ui.failure);
  g_api.getGames()
  .then(g_ui.getGamesSuccess)
  .catch(g_ui.failure);
};

const onPostResponse = (data) => {
  g_api.postResponse(data)
  .then(g_ui.postResponseSuccess)
  .catch(g_ui.failure);
};

const onDeleteAttempt = () => {
  g_api.deleteAttempt()
  .then(g_ui.deleteAttemptSuccess)
  .catch(g_ui.failure);
};

const onNewAttempt = (event) => {
  event.preventDefault();
  g_api.newAttempt()
  .then(g_ui.newAttemptSuccess)
  .catch(g_ui.failure);
};


const addHandlers = () => {
  $('#create-game').on('click', function(e){
    e.preventDefault();
    onGetAllPictutes(e);
    onNewAttempt(e);
    store.responseTotal = [];
    store.responseT = [];
    $('.game-stat').html(' ');
  });
  $('#delete-attempts').on('click', onDeleteAttempt);
  // $("#new-attempt").on('click', onNewAttempt);
};

module.exports = {
  addHandlers,
  onPostResponse,
};
