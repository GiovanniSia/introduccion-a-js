/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor 
edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


function conseguirListaInputEdades() {
    const listaNodosEdades = document.querySelectorAll(".input-edades");
    let listaValoresEdades = [];
    let valor = 0;
    const vacio = 0;
    for (let i = 0; i < listaNodosEdades.length; i++) {
        valor = Number(listaNodosEdades[i].value);
        if (valor >= vacio) {
            listaValoresEdades.push(valor)
        }
    }
    return listaValoresEdades;
}

function reiniciar() {
    borrarListaDeIntegrantes();
    ocultarTexto();
    return false;
}

function borrarListaDeIntegrantes(){
    const listaDeIngresarEdad = document.querySelectorAll(".bloque-ingresar-eadad");
    for (let i = 0; i < listaDeIngresarEdad.length; i++) {
        listaDeIngresarEdad[i].remove();
    }
}

function principal() {

    crearBoton("Calcular");
    crearBoton("Reiniciar");

    const $botonIntegrantes = document.querySelector("#boton-ingresar");
    const $botonCalcular = document.querySelector("#boton-Calcular");
    const $botonReiniciar = document.querySelector("#boton-Reiniciar");
    $botonIntegrantes.onclick = function () {
        reiniciar();
        crearInputsEdades();
        return false;
    }

    $botonCalcular.onclick = function () {
        const listaValoresEdades = conseguirListaInputEdades()
        const mayorEdad = calcularMayorEdad(listaValoresEdades);
        const menorEdad = calcularMenorEdad(listaValoresEdades);
        const promedioEdad = calcularPromedioEdad(listaValoresEdades);

        agregarTexto("mayor", mayorEdad);
        agregarTexto("menor", menorEdad);
        agregarTexto("promedio", promedioEdad);

        return false;
    }

    $botonReiniciar.onclick = reiniciar;
}

principal();





/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
