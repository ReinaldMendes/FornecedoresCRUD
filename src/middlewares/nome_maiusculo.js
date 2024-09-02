const axios = require("axios");

// Middleware para alterar o nome para maiúsculo
const uppercaseName = (req, res, next) => {
  if (req.body.nome) {
    req.body.nome = req.body.nome.toUpperCase();
  }
  next();
};

// Middleware para buscar o endereço pelo CEP
const cep_endereco = (req, res, next) => {
  axios
    .get(`https://viacep.com.br/ws/${req.body.endereco}/json/`)
    .then((resposta) => {
      delete req.body.cep;
      req.body.endereco = resposta.data;
      next();
    })
    .catch((error) => {
      res.status(500).send("Erro ao buscar endereço.");
    });
};

module.exports = { cep_endereco, uppercaseName };
