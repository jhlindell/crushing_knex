exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('project_id');
    table.string('project_name').defaultTo('');
    table.integer('team_leader').references('user_id').inTable('users').onDelete('cascade');
    table.timestamp('start_time').notNullable().defaultTo(knex.fn.now());
    table.timestamp('end_time').notNullable().defaultTo(knex.fn.now());
    table.integer('x_size').notNullable();
    table.integer('y_size').notNullable();
    table.integer('max_pixel_flips');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('projects');
};
