const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
function find() {
  return db("schemes");
}
async function findById(id) {
  try {
    const scheme = await db("schemes")
      .where({ id })
      .first();
    if (scheme) {
      return scheme;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

function findSteps(id) {
  return db("steps")
    .select("steps.id", "scheme_name", "step_number", "instructions")
    .where({ scheme_id: id })
    .join("schemes", "Steps.scheme_id", "schemes.id");
}

async function add(scheme) {
  try {
    const [id] = await db("schemes").insert(scheme);
    const newScheme = await findById(id);
    return newScheme;
  } catch (error) {
    console.error(error);
  }
}

async function update(changes, id) {
  try {
    const updating = await db("schemes")
      .update(changes)
      .where({ id });
    const updated = await findById(id);
    return updated;
  } catch (error) {
    console.error(error);
  }
}

async function remove(id) {
  try {
    const tobeRemoved = await findById(id);
    if (tobeRemoved) {
      await db("schemes").del();
      return tobeRemoved;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}
