const routes = require("express").Router();
const controllers = require("../controllers")

routes.get("/", controllers.firstFunction)

module.exports = routes;