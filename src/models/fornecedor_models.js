let nextID = 1;
const model = (fornecedor, id = nextID++) => {
  if (fornecedor.nome != undefined && fornecedor.nome != "") {
    return {
      id: id,
      nome: fornecedor.nome,
    };
  }
};
module.exports = model;
