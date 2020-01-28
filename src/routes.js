const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ result: "Hello Geek!" });
});

module.exports = routes;
