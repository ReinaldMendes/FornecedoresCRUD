const axios = require("axios");

const uppercaseName = (req, res, next) => {
  if (req.body.nome) {
    req.body.nome = req.body.nome.toUpperCase();
  }
  next();
};

module.exports = uppercaseName;
