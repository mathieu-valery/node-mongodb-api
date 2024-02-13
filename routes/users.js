const router = require("express").Router();

const UserController = require("../controllers/UsersController");

router.get("/", UserController.index);
router.get("/add", UserController.add);
router.get("/:id", UserController.show);

module.exports = router;
