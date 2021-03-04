function calcularMayorEdad(lista) {
    let valorMax = 0;
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        if (valor >= valorMax) {
            valorMax = valor;
        }
    }
    return valorMax;
}

function calcularMenorEdad(lista) {
    let valorMin = calcularMayorEdad(lista);
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        if (valor < valorMin) {
            valorMin = valor;
        }
    }
    return valorMin;
}

function calcularPromedioEdad(lista) {
    let sumaTotal = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaTotal += lista[i];
    }
    let promedio = sumaTotal / lista.length;
    return promedio;
}