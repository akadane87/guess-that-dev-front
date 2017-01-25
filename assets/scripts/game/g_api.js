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

// const getAllNames = () =>
//     $.ajax({
//         url: config.apiOrigins.development + '/names',
//         method: 'GET',
//         headers: {
//           Authorization: 'Token token=' + store.user.token,
//         },
//     });

module.exports = {
  getAllPictures,
  // getAllNames,
};
