
exports.seed = function(knex, Promise) {
  let data = [
    {
      project_id: 1,
      project_name: 'Super Art',
      team_leader: 1,
      x_size: 16,
      y_size: 16,
      max_pixel_flips: 10
    }
  ]

  return knex('projects').del()
    .then(() => {
      return knex('projects').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('projects_project_id_seq', (SELECT MAX(project_id) FROM projects))");
    });
};
