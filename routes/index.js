const router = require("express").Router();

const activityRouter = require("../modules/Activity/activityroute");
const subActivityRouter = require("../modules/subActivity/subactivityroute");

router.use("/api/v1/activities", activityRouter);
router.use("/api/v1/sub-activities", subActivityRouter);

module.exports = router;
