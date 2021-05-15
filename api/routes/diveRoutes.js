'use strict';
module.exports = function(app) {
  var dive = require('../controllers/diveController');


  app.route('/dives')
  .get(dive.list_all_dives)
  .post(dive.create_a_dive);

  app.route('/dives/:diveId')
    .get(dive.read_a_dive)
    .put(dive.update_a_dive)
    .delete(dive.delete_a_dive);

}