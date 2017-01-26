'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const g_api = require('./g_api');
const g_ui = require('./g_ui');
// const store = require('../store');


const onGetAllPictutes = (event) => {
  // debugger;
  console.log('Get All Pics EVENTS');
  event.preventDefault();
  g_api.getAllPictures()
    .then(g_ui.getAllPicturesSuccess)
    .catch(g_ui.failure);
};

const onPostResponse = (data) => {
  g_api.postResponse(data)
  .then(g_ui.postResponseSuccess)
  .catch(g_ui.failure);
};

const onDeleteAttempt = () => {
  // let id = store.user.id;
  debugger;
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

// const onGetAllNames = (event) => {
//   // debugger;
//   console.log('Get All Pics EVENTS');
//   event.preventDefault();
//   g_api.getAllNames()
//     .then(g_ui.getAllNamesSuccess)
//     .catch(g_ui.failure);
// };


const addHandlers = () => {
  $('#create-game').on('click', onGetAllPictutes);
  $('#delete-attempts').on('click', onDeleteAttempt);
  $("#new-attempt").on('click', onNewAttempt);
};

module.exports = {
  addHandlers,
  onPostResponse,
};
