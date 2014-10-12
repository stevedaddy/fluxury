'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    Actions = {

      init: function(promise) {
        AppDispatcher.handleViewAction({
          actionType: Constants.INIT,
          promise: promise
        });
      },

      create: function(name) {
        AppDispatcher.handleViewAction({
          actionType: Constants.CREATE,
          name: name
        });
      },

      random: function() {
        AppDispatcher.handleViewAction({
          actionType: Constants.RANDOM
        });
      }

    };

module.exports = Actions;