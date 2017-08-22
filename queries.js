const knex = require('knex');

function getTeamMembersByProject(id){
  let query = knex('users')
    .select(
      'users.user_id as user_id',
      'users.username as username'
    )
    .innerJoin('teams', 'user_id', 'teams.user_id')
    .where('teams.project_id', id)
    .orderby('username', 'asc');

  return query;
}

function getProjectsByUserId(id){
  let query = knex('users')
    .select(
      'projects.project_id',
      'projects.project_name',
      'projects.start_time'
    )
    .innerJoin('teams', 'users.user_id', 'teams.user_id')
    .where('teams.user_id', id)
    .orderby('projects.start_time', 'asc');

  return query;
}
