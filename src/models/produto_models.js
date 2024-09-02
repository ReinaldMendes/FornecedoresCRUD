const mercado_controllers = require("../controllers/mercado_controllers");
const fornecedor_controllers = require("../controllers/fornecedor_controllers");

let nextId = 1;
const model = (produto, id = nextId++) => {
  if (
    produto.nome != undefined &&
    produto.nome != "" &&
    produto.id_mercado != undefined &&
    mercado_controllers.show(produto.id_mercado) &&
    produto.id_fornecedor != undefined &&
    fornecedor_controllers.show(produto.id_fornecedor)
  ) {
    return {
      id,
      id_mercado: produto.id_mercado,
      id_fornecedor: produto.id_fornecedor,
      nome: produto.nome,
      quantidade: produto.quantidade,
    };
  }
};
module.exports = model;
