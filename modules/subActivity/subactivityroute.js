const router = require("express").Router();
const subController = require("./subactivitycontroller");

router.get("/", async (req, res, next) => {
  try {
    const data = await subController.list();
    res.json({ data, msg: "list all the data" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await subController.getById(req.params.id);
    res.json({ data, msg: "get one data ${id}" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await subController.create(req.body);
    res.json({ data, msg: "posting the data" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const data = await subController.updateById(req.params.id, req.body);
    res.json({ data: data, msg: "updating id" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await subController.removeById(req.params.id);
    res.json({ data: data, msg: "deleting all the data" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
