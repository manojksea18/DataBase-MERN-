const router = require("express").Router();
const Controller = require("./activitycontroller");

router.get("/get-all", async (req, res, next) => {
  try {
    const data = await Controller.getAll(req.query);
    res.json({ data, msg: "list all" });
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
router.patch("/:id", async (req, res, next) => {
  try {
    const data = await Controller.updateById(req.params.id, req.body);
    res.json({ data, msg: "updating id " });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = await Controller.create(req.body);
    res.json({ data, msg: "posting the new data " });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Controller.removeById(req.params.id);
    res.json({ data: data, msg: "Deleting the data " });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
