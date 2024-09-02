const express = require("express");
const router = express.Router();
const cep_endereco = require("../middlewares/cep_endereco.js");
const mercado_controllers = require("../controllers/mercado_controllers.js");

router.post("/", cep_endereco, (req, res, next) => {
  const mercado = req.body;
  const code = mercado_controllers.store(mercado);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const mercado = mercado_controllers.index();
  res.json(mercado);
});

router.get("/:id", (req, res) => {
  const mercado = mercado_controllers.show(req.params.id);
  res.json(mercado);
});

router.put("/:id", cep_endereco, (req, res, next) => {
  const mercado = req.body;
  const code = mercado_controllers.update(req.params.id, mercado);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  mercado_controllers.destroy(req.params.id);
  res.json();
});

module.exports = router;
