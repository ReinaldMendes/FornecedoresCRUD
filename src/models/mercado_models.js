let nextId = 1;

const model = (mercado, id = nextId++) => {
  if (
    mercado.nome != undefined &&
    mercado.nome != "" &&
    mercado.endereco != undefined
  ) {
    return {
      id,
      nome: mercado.nome,
      endereco: mercado.endereco,
    };
  }
};
module.exports = model;
