let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;

  let qdTotalCerva = cervaPP(duracao) * adultos;

  let qdTotalBebida =
    bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p> ${qdTotalCarne / 1000} kg de carnes</p>`;

  resultado.innerHTML += `<p>${Math.ceil(
    qdTotalCerva / 355
  )} Latas  de cervejas </p>`;

  resultado.innerHTML += `<p>${Math.ceil(
    qdTotalBebida / 2000
  )} Pet´s de 2l de bebidas </p>`;
}
function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function bebidaPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
