document.querySelector('#calcular-salario-mensual').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector('#salario-mensual').value = salarioMensual;

    return false;
}

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}
/*
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function () {
  const salarioAnual = document.querySelector("#salario-anual").value;
  alert(salarioAnual)
  const mesesDelAnio = 12;
  let salarioMensual = salarioAnual / mesesDelAnio;
  document.querySelector("#salario-mensual").value = salarioMensual;
  return false;
}
*/