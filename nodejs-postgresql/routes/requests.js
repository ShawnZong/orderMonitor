const express = require("express");
const router = express.Router();
const requestService = require("../services/request");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    if (req.query.tag && req.query.text) {
      return res.json(
        await requestService.selectRequests(
          req.query.tag,
          req.query.text,
          req.query.page
        )
      );
    }
    return res.json(await requestService.getAllRequests(req.query.page));
  } catch (err) {
    console.error(`Error while getting requets `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await requestService.addRequest(req.body));
  } catch (err) {
    console.error(`Error while posting requests `, err.message);
    next(err);
  }
});

module.exports = router;
