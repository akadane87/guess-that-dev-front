'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/g_events.js');



$(() => {
  setAPIOrigin(location, config);


  $('.hidden-till-signin').hide();
  // $('.crud_box').hide();
  $('#new-attempt').hide();
  $('#create-game').hide();

  // $('.SignIn_email').val('666@666.com');
  // $('.SignIn_password').val('1');

  // $('.SignIn-button').click();
  authEvents.addHandlers();
  gameEvents.addHandlers();

});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


// # class RemoveAttemptsFromUsers < ActiveRecord::Migration
//   # def change
//     # remove_column :users, :Attempts, :integer
//     # remove_column :users, :attempt, :integer
//     # remove_column :users, :attempts, :integer
//   # end
// # end
