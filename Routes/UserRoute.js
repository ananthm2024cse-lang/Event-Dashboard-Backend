const express = require("express");

const userController = require("./../Controllers/UserController");

let userRoutes = express.Router();
userRoutes.route("/").get(userController.getAllUser).post(userController.createUser);
userRoutes.route("/:id").get(userController.getUser).put(userController.updateUser).delete(userController.deleteUser);

module.exports = userRoutes;