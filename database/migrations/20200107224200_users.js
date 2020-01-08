exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("first_name").notNullable();
    tbl.string("last_name").notNullable();
    tbl
      .string("username")
      .notNullable()
      .unique();
    tbl.string("password").notNullable();
    tbl.string("email").notNullable();
    tbl.string("location").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
