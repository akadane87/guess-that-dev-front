'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const g_api = require('./g_api');
const g_ui = require('./g_ui');


const onGetAllPictutes = (event) => {
  // debugger;
  console.log('Get All Pics EVENTS');
  event.preventDefault();
  g_api.getAllPictures()
    .then(g_ui.getAllPicturesSuccess)
    .catch(g_ui.failure);
};

const onGetAllNames = (event) => {
  // debugger;
  console.log('Get All Pics EVENTS');
  event.preventDefault();
  g_api.getAllNames()
    .then(g_ui.getAllNamesSuccess)
    .catch(g_ui.failure);
};


const addHandlers = () => {
  $('#create-game').on('click', onGetAllPictutes);
  $('#create-game').on('click', onGetAllNames);
};

module.exports = {addHandlers};
