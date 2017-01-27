'use strict';

const config = require('../config');
const store = require('../store');


const getAllPictures = () =>
    $.ajax({
        url: config.apiOrigins.development + '/pictures',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });


  const getGame = function(game_id){
    return $.ajax({
      url:config.apiOrigins.development + '/attempts/' + game_id,
      method:'GET',
      headers:{
        Authorization:'Token token=' + store.user.token
      }
    })
  };

  const getGames = function(){
    return $.ajax({
      url:config.apiOrigins.development + '/attempts/',
      method:'GET',
      headers:{
        Authorization:'Token token=' + store.user.token
      }
    })
  }
window.getGames = getGames
  window.getGame = getGame

const postResponse = (data) =>
    $.ajax({
        url: config.apiOrigins.development + '/responses',
        method: 'POST',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

const deleteAttempt = (data) =>
    $.ajax({
        url: config.apiOrigins.development + '/attempts',
        method: 'DELETE',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

const newAttempt = () =>
    $.ajax({
        url: config.apiOrigins.development + '/attempts',
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
};
