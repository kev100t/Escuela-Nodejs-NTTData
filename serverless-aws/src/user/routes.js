const express = require('express');

const routes = express.Router({
  mergeParams: true
});

routes.get('/', (req, res) => {
  res.status(200).json({
    nombres: "Kevin Primo"
  });
});

module.exports = { routes };
