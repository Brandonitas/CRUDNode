
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {id: 1, name: 'Brandon', matricula: 'A01335537', carrera: 'ITC'},
        {id: 2, name: 'Armando', matricula: 'A05637263', carrera: 'LAE'},
        {id: 3, name: 'Daniel', matricula: 'A013364829', carrera: 'ARQ'}
      ]);
    });
};

