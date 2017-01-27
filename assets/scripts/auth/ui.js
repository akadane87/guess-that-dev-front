'use strict';

const store = require('../store');

const success = (data) => {
  console.log('auth success', + data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  console.log('store is' + store);
  // debugger;
  $('.hidden-after-signin').hide();
  $('.hidden-till-signin').show();
  success(data);
  $('#sign-in').trigger('reset');
  $('.flash-card-handlebars').show();
  $('#create-game').show();
};

const signOutSuccess = () => {
    success(store.user);
    $('.hidden-till-signin').hide();
    $('.hidden-after-signin').show();
    store.user = null;
    $('#delete-attempts').hide();
    $('.flash-card-handlebars').hide();
};

const failure = (error) => {
};

module.exports = {
  failure,
  success,
  signOutSuccess,
  signInSuccess,
};
