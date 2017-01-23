'use strict';

const config = require('../config');
const store = require('../store');

const signUp = (data) =>
  $.ajax({
      url: config.apiOrigins.development + '/sign-up',
      method: 'POST',
      data,

  });

const signIn = (data) =>
  $.ajax({
      url: config.apiOrigins.development + '/sign-in',
      method: 'POST',
      data,
  });

const changePassword = (data) =>
  $.ajax({
      url: config.apiOrigins.development + '/change-password/' + store.user.id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });

const signOut = () =>
  $.ajax({
    url: config.apiOrigins.development + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};

  // API="http://localhost:4741"
  // URL_PATH="/sign-up"
  // curl "${API}${URL_PATH}" \
  //   --include \
  //   --request POST \
  //   --data-urlencode "credentials[email]=${EMAIL}" \
  //   --data-urlencode "credentials[password]=${PASSWORD}" \
  //   --data-urlencode "credentials[password_confirmation]=${PASSWORD}"

  // curl "http://localhost:4741/sign-up" \
  //   --include \
  //   --request POST \
  //   --header "Content-Type: application/json" \
  //   --data '{
  //     "credentials": {
  //       "email": "'"dev@dev.com"'",
  //       "password": "'"1"'",
  //       "password_confirmation": "'"1"'"
  //     }
  //   }'
  //
  // echo
