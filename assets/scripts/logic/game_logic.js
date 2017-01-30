'use strict';
const g_api = require('../game/g_api.js');
const store = require('../store');


const addLogicEvents = (event) => {
  event.preventDefault();
  let name = $(event.target).data('name'); //
  $('.name-response').val(name);
  let inputId = $(event.target).data('id');
  $('.name-response').attr('data-id', inputId);
};

const nameCheck = (event) => {
  event.preventDefault();
  let submitId = $(event.target).attr('data-id');
  let pictureId = $('.dev-picture').eq(submitId-1).attr('data-id');
  let responseTF = undefined;

  //

  if (store.responseTotal === 0) {
    $('.game-stat').html('You got 0 correct out of 0');
  }else{
    $('.game-stat').html('You got ' + store.responseT + ' correct out of ' + store.responseTotal);
}

  if ( $('.name-response').attr('data-id') === pictureId) {
    responseTF = true;
    store.responseTotal++;
    store.responseT++;
    $(event.target).parent().parent().find('.ufm-check').html('NICE');
  } else {
    store.responseTF = false;
    store.responseTotal++;
    $(event.target).parent().parent().find('.ufm-check').html('NOPE');
  }

  $('.game-stat').html('You got ' + store.responseT + ' correct out of ' + store.responseTotal);


let data = {
  response: {
    response: responseTF,
    picture_id: pictureId,
    user_id: store.user.id,
    // attempt_id:
  }
};
  g_api.postResponse(data);
 };

const addHandlers = () => {
  $('.name-input').on('click', addLogicEvents);
  $('.name-check-submit').on('click', function(e){
    $('.name-response').val(''); nameCheck(e);
  });
};

module.exports = {
  addHandlers,
  addLogicEvents,
};
