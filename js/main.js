const form = document.getElementById("novoItem");
const listas = document.getElementById("listas");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("funcionou");

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  criarElemento(
    nome.value,
    quantidade.value,

    (nome.value = ""),
    (quantidade.value = "")
  );
});

function criarElemento(nome, quantidade) {
  console.log(nome), console.log(quantidade);

  const NovoItem = document.createElement("li");
  NovoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  NovoItem.appendChild(numeroItem);
  NovoItem.innerHTML += nome;

  listas.appendChild(NovoItem);

  localStorage.getItem("nome", nome);
  localStorage.getItem("quantidade", quantidade);
}
