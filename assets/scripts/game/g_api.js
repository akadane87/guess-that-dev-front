'use strict';

const config = require('../config');
const store = require('../store');


const getAllPictures = () =>
    $.ajax({
        url: config.apiOrigin + '/pictures',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });


  const getGame = function(game_id){
    return $.ajax({
      url:config.apiOrigin + '/attempts/' + game_id,
      method:'GET',
      headers:{
        Authorization:'Token token=' + store.user.token
      }
    });
  };

  const getGames = function(data){
    return $.ajax({
      url:config.apiOrigin + '/attempts/',
      method:'GET',
      data,
      headers:{
        Authorization:'Token token=' + store.user.token
      }
    });
  };
window.getGames = getGames;
  window.getGame = getGame;

const postResponse = (data) =>
    $.ajax({
        url: config.apiOrigin + '/responses',
        method: 'POST',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

const deleteAttempt = (data) =>
    $.ajax({
        url: config.apiOrigin + '/attempts',
        method: 'DELETE',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

const newAttempt = () =>
    $.ajax({
        url: config.apiOrigin + '/attempts',
        method: 'POST',
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

module.exports = {
  getAllPictures,
  postResponse,
  deleteAttempt,
  newAttempt,
  getGames,
};
