exports.seed = function(knex, Promise) {
  let data = [
    {
      canvas_id: 1,
      canvas_string: '',
      project_id: 1
    }
  ];

  return knex('canvases').del()
    .then(() => {
      return knex('canvases').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('canvases_canvas_id_seq', (SELECT MAX(canvas_id) FROM canvases))");
    });
};
