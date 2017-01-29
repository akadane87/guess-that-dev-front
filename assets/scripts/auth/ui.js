'use strict';

const store = require('../store');

const success = (data) => {
  console.log('auth success', + data);
};

const signUpSuccess = (data) => {
  $('.ufm-auth').html("nice! now please SIGN IN");
  $('#sign-up').trigger('reset');
  console.log('signUp success', + data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  console.log('store is' + store);
  // debugger;
  $('.hidden-after-signin').hide();
  $('.hidden-till-signin').show();
  success(data);
  $('#sign-in').trigger('reset');
  $('.ufm-auth').html("nice! you're cleared to play");
  $('.flash-card-handlebars').show();
  $('#create-game').show();
};

const signOutSuccess = () => {
    success(store.user);
    $('.hidden-till-signin').hide();
    $('.hidden-after-signin').show();
    $('.ufm-auth').html(" ");
    store.user = null;
    $('#delete-attempts').hide();
    $('.flash-card-handlebars').hide();
    $('#create-game').hide();
};

const changePasswordSuccess = (data) => {
  $('.ufm-auth').html("password changed SUCCESSFULLY");
  $('#change-password').trigger('reset');
  console.log('signUp success', + data);
};


const failure = (error) => {
  $('.ufm-auth').html("please try again");
  $('#change-password').trigger('reset');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePasswordSuccess,
};
