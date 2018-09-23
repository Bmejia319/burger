var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
  	orm.update("burgers", id, cb );
  }

};


// Export the database functions for the controller (catsController.js).
module.exports = burger;
