const db = require("../database/dbConfig.js");

function find() {
  return db("users").select("first_name", "last_name", "username", "password", "email", "location");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

module.exports = {
  add,
  find,
  findBy,
  findById,
}