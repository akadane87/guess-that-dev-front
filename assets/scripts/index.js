'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

const authEvents = require('./auth/events.js');


$(() => {
  setAPIOrigin(location, config);


  // $('.hidden-till-signin').hide();
  // $('.crud_box').hide();

  // $('.SignIn_email').val('a@a.com');
  // $('.SignIn_password').val('a');
  // $('.SignIn-button').click();
  authEvents.addHandlers();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
