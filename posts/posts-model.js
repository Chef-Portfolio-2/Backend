const db = require("../database/dbConfig.js");

function find() {
  return db("posts");
}

function findBy(filter) {
  return db("posts").where(filter);
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}

async function add(post) {
  const [id] = await db("posts").insert(post);
  return findById(id);
}

function remove(id) {
  return db("posts")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("posts").where({ id }).update(changes);
}

module.exports = {
  add,
  remove,
  update,
  find,
  findBy,
  findById
};
