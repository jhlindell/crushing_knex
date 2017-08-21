exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', (table) => {
    table.increments('team_id');
    table.integer('project_id').references('project_id').inTable('projects').onDelete('cascade');
    table.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
