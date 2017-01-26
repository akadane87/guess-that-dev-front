'use strict';
const g_api = require('../game/g_api.js');
const store = require('../store');

// const nameInputFill = () => {
//   let nameId = $('.name-input').attr('data-id');
//   $('.name-response').val(nameId);
// };



const addLogicEvents = (event) => {
  event.preventDefault();
  let name = $(event.target).data('name'); //
  $('.name-response').val(name);
  let inputId = $(event.target).data('id');
  $('.name-response').attr('data-id', inputId);
  // debugger;
};

const nameCheck = (event) => {
  event.preventDefault();
  // let name = $(event.target).data('name');
  let submitId = $(event.target).attr('data-id');
  let pictureId = $('.dev-picture').eq(submitId-1).attr('data-id');
  let responseTF = undefined;
  // debugger;
  //
  if ( $('.name-response').attr('data-id') === pictureId) {
    responseTF = true;
    $('.ufm-check').html('NICE');
  } else {
    responseTF = false;
    $('.ufm-check').html('NOPE');
  }

let data = {
  response: {
    response: responseTF,
    picture_id: pictureId,
    user_id: store.user.id,
    // attempt_id:
    // otherstuff: // other stuff
  }
};
  // let storeData = store.data;
  g_api.postResponse(data);
 };

const addHandlers = () => {
  // $('.flash-card-handlebars').on('submit', '.name-check-form', addLogicEvents);
  $('.name-input').on('click', addLogicEvents);
  $('.name-check-submit').on('click', nameCheck);
};

module.exports = {
  addHandlers,
  addLogicEvents,
  // storeData,
};
