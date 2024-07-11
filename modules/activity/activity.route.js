const router = require("express").Router();
const Controller = require("./activity.controller");

router.get("/", async (req, res, next) => {
  try {
    const data = await Controller.list(req.params.id);
    res.json({ data, msg: "list of all activities" });
  } catch (e) {
    next(e);
  }
});

router.get("/get-all", async (req, res, next) => {
  try {
    const data = await Controller.getAll();
    res.json({ data, msg: "list of all activities & sub-activitues" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await Controller.getById(req.params.id);
    res.json({ data, msg: "getting one id" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await Controller.create(req.body);
    res.json({ data, msg: "added new activity" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const data = await Controller.updateById(req.params.id, req.body);
    res.json({ data, msg: "updated activity" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Controller.removeById(req.params.id);
    res.json({ data, msg: "deleted activity" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
