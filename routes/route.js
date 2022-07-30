const router = require("express").Router();
const controller = require("../controllers/controller");

router.get("/getData/:code", controller.getData);
router.patch("/updateData/:code", controller.updateStatus);

module.exports = router;
