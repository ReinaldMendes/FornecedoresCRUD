const express = require("express");
const router = express.Router();
const produto_controllers = require("../controllers/produto_controllers.js");

router.post("/", (req, res) => {
  const produto = req.body;
  const code = produto_controllers.store(produto);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const produto = produto_controllers.index();
  res.json(produto);
});

router.get("/:id", (req, res) => {
  const produto = produto_controllers.show(req.params.id);
  res.json(produto);
});

router.put("/:id", (req, res) => {
  const produto = req.body;
  const code = produto_controllers.update(req.params.id, produto);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  produto_controllers.destroy(req.params.id);
  res.json();
});

module.exports = router;
