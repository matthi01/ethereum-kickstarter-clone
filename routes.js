//Note: for dynamic paths, need to use next-routes module

const routes = require("next-routes")();

routes.add("test", "test");

module.exports = routes;
