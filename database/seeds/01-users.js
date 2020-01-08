const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      first_name: 'testing',
      last_name: 'testing',
      username: 'chef',
      password: bcrypt.hashSync('password', 14),
      email: 'chef@email.com',
      location: 'Seattle, WA'
    }
  ])
};
