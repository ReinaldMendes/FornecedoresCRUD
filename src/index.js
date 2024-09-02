const express = require("express");
const fornecedor_router = require("./router/fornecedor_router.js");
const mercado_router = require("./router/mercado_router.js");
const produto_router = require("./router/produto_router.js");
const cep_endereco = require("./middlewares/cep_endereco.js");
const uppercaseName = require("./middlewares/nome_maiusculo.js");
const nome_maiusculo = require("./middlewares/nome_maiusculo.js");
const app = express();
const port = 3000;

app.use(express.json());
app.use(nome_maiusculo);
app.use("/fornecedores", fornecedor_router);
app.use("/mercado", mercado_router);
app.use("/produto", produto_router);
app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
