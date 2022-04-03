var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersmysql");

router.get("/createtable", usersController.createTable);
router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.post("/checklogin", usersController.login);
router.get("/showuser/:email", usersController.showUser);
router.put("/edituser/:id", usersController.editUser);
module.exports = router;
