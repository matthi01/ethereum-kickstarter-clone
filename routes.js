//Note: for dynamic paths, need to use next-routes module

const routes = require("next-routes")();

// add new route mapping for specific campaigns
routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show");

module.exports = routes;
