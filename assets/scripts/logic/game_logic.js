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
  let responseTotal = [];
  let responseT = [];
  // debugger;
  //
  if ( $('.name-response').attr('data-id') === pictureId) {
    responseTF = true;
    responseTotal++;
    responseT++;
    // debugger;
    $(event.target).parent().parent().find('.ufm-check').html('NICE');
    // $('.ufm-check').html('NICE');
  } else {
    responseTF = false;
    responseTotal++;
    $(event.target).parent().parent().find('.ufm-check').html('NOPE');
  }
$('.game-stat').html('You got' + responseT + 'correct out of' + responseTotal);

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
  $('.name-check-submit').on('click', function(e){
    $('.name-response').val(''); nameCheck(e);
  });

};

module.exports = {
  addHandlers,
  addLogicEvents,
  // storeData,
};
