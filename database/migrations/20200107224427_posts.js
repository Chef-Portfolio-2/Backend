exports.up = function(knex) {
  return knex.schema.createTable("posts", tbl => {
    tbl.increments();
    tbl.string("chef_name").notNullable();
    tbl.string("title").notNullable();
    tbl.string("photo").notNullable();
    tbl.string("meal_type").notNullable();
    tbl.string("ingredients").notNullable();
    tbl.string("instructions").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("posts");
};
