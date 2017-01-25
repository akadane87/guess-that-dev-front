'use strict';


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
  debugger;
};

const nameCheck = (event) => {
  event.preventDefault();
  // let name = $(event.target).data('name');
  let submitId = $(event.target).attr('data-id');
  let pictureId = $('.dev-picture').eq(submitId-1).attr('data-id');

  // debugger;
  //
  if ( $('.name-response').attr('data-id') === pictureId) {
    $('.ufm-check').html('NICE');
  } else {
    $('.ufm-check').html('NOPE');
  }
};

const addHandlers = () => {
  // $('.flash-card-handlebars').on('submit', '.name-check-form', addLogicEvents);
  $('.name-input').on('click', addLogicEvents);
  $('.name-check-submit').on('click', nameCheck);
};

module.exports = {
  addHandlers,
  addLogicEvents,
};
