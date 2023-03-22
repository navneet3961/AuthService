const express = require("express");
const UserController = require("../../controllers/user-controller");
const { AuthServiceValidator } = require("../../middlewares/index");
const router = express.Router();

router.post("/signup", AuthServiceValidator.validateUserAuth, UserController.create);
router.post("/signin", AuthServiceValidator.validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;