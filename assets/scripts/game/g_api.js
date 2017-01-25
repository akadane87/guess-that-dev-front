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

const postResponse = (data) =>
    $.ajax({
        url: config.apiOrigins.development + '/responses',
        method: 'POST',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

const deleteHistory = (id, data) =>
    $.ajax({
        url: config.apiOrigins.development + '/responses/' + id,
        method: 'DELETE',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

module.exports = {
  getAllPictures,
  postResponse,
  deleteHistory,
};
