//DIAS DO MES = 22

var spanHora = document.querySelector(".secao__rodape .secao__rodape__valor span");
var inputSalario = document.querySelector('#ganho-mes');
var inputHoras = document.querySelector('#horas-dia');

function calcularValorHora() {
   var qtdTotalDeHoras = inputHoras.valueAsNumber * 22;
   var valorDeHora = (inputSalario.valueAsNumber / qtdTotalDeHoras).toFixed(2);
   spanHora.textContent = 'R$' + valorDeHora;
}
