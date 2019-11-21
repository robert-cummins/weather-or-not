
exports.up = function(knex) {
  return knex.schema.createTable('activities', (table) =>{
      table.increments('activity_id'),
      table.string('activity_name'),
      table.string('snow'),
      table.string('sleet'),
      table.string('hail'),
      table.string('thunder'),
      table.string('heavy_rain'),
      table.string('light_rain'),
      table.string('showers'),
      table.string('heavy_cloud'),
      table.string('light_cloud')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities')
};
