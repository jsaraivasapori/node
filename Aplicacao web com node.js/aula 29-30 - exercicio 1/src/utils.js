function gerarListaComId(list) {
  if (!list || list.length === 0) {
    console.log("Lista vazia");

    return list;
  }

  for (let i = 0; i < list.length; i++) {
    list[i] = { id: i + 1, email: list[i].email };
  }
  return list;
}

module.exports = { gerarListaComId };
