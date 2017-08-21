exports.seed = function(knex, Promise) {
  let data = [
    {
      team_id: 1,
      project_id: 1,
      user_id: 1
    },
    {
      team_id: 2,
      project_id: 1,
      user_id: 2
    },
    {
      team_id: 3,
      project_id: 1,
      user_id: 3
    },
  ]

  return knex('teams').del()
    .then(() => {
      return knex('teams').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('teams_team_id_seq', (SELECT MAX(team_id) FROM teams))");
    });
};
