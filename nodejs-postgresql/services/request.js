const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAllRequests(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query("SELECT * FROM request OFFSET $1 LIMIT $2", [
    offset,
    config.listPerPage,
  ]);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function selectRequests(tag, text, page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM (SELECT * FROM request WHERE LOWER(${tag}) LIKE '%${text}%') AS tmp OFFSET $1 LIMIT $2`,
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function addRequest(newobj) {
  console.log(newobj);
  const result = await db.query(
    "INSERT INTO request(id, requestname,requesttype,description,priority,created,status) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *",
    [
      newobj.id,
      newobj.requestName,
      newobj.requestType,
      newobj.description,
      newobj.priority,
      newobj.created,
      newobj.status,
    ]
  );
  let message = "Error in creating request";

  if (result.length) {
    message = result;
  }

  return { message };
}

module.exports = {
  getAllRequests,
  addRequest,
  selectRequests,
};
