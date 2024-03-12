const express = require("express");
const { getUsersHandler } = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.get("/",getUsersHandler);

module.exports = userRoutes;