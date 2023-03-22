const express = require("express");
const UserController = require("../../controllers/user-controller");
const { AuthServiceValidator, AuthAdmimValidator } = require("../../middlewares/index");
const router = express.Router();

router.post("/signup", AuthServiceValidator.validateUserAuth, UserController.create);
router.post("/signin", AuthServiceValidator.validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/isAdmin", AuthAdmimValidator.validateIsAdminRequest, UserController.isAdmin);

module.exports = router;