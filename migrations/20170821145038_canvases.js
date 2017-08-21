exports.up = function(knex, Promise) {
  return knex.schema.createTable('canvases', (table) => {
    table.increments('canvas_id');
    table.string('canvas_string').defaultTo('');
    table.integer('project_id').references('project_id').inTable('projects').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('canvases');
};
