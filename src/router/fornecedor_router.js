const express = require("express");
const router = express.Router();
const fornecedor_controllers = require("../controllers/fornecedor_controllers.js");
router.post("/", (req, res) => {
  const fornecedores = req.body;
  const code = fornecedor_controllers.store(fornecedores);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const fornecedores = fornecedor_controllers.index();
  res.json(fornecedores);
});

router.get("/:id", (req, res) => {
  const fornecedores = fornecedor_controllers.show(req.params.id);
  res.json(fornecedores);
});

router.put("/:id", (req, res) => {
  const fornecedores = req.body;
  const code = fornecedor_controllers.update(req.params.id, fornecedores);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  fornecedor_controllers.destroy(req.params.id);
  res.json();
});

module.exports = router;
