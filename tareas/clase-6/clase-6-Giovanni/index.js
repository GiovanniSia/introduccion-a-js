/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor 
edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular.onclick = function (){
	const $inputNumeroFamiliares = document.querySelector("#input-numero-familiares");
    	const numeroFamiliares = $inputNumeroFamiliares.value;    
	crearIngresarEdades(numeroFamiliares);
	return false;
}

function crearIngresarEdades(numeroFamiliares){
    const $nodoIngresarEdades = document.querySelector("#inputs-edades-integrantes");
    for (let i = 0; i < numeroFamiliares; i++) {     
        const nuevoDiv = document.createElement("div");
        const nuevoLabel = document.createElement("label");
        const nuevoInput = document.createElement("input");
        nuevoLabel.textContent = "Ingresar edad:"
        nuevoInput.className="input-edad";
        nuevoDiv.appendChild(nuevoLabel);
        nuevoDiv.appendChild(nuevoInput);
        $nodoIngresarEdades.appendChild(nuevoDiv);
    }
	crearBotonCalcularEdades();
}

function crearBotonCalcularEdades(){
	const $nodoInputEdades = document.querySelector("#inputs-edades-integrantes");
	const nuevoBoton = document.createElement("button");	
	nuevoBoton.id="boton-calcular-edades";
	nuevoBoton.textContent="Calcular edades";
	$nodoInputEdades.appendChild(nuevoBoton);
	declararBotonCalcularEdades();
}

function declararBotonCalcularEdades(){
	const $botonCalcularEdades=document.querySelector("#boton-calcular-edades");
	$botonCalcularEdades.onclick = function (){
		const arrayEdades = sacarEdadesInputs();		
		const arrayCalculosEdades = calcularEdades(arrayEdades);		
		mostrarEdades(arrayCalculosEdades);
	}
}

function mostrarEdades(arrayCalculosEdades){
	document.querySelector("#resultado-edad-maxima").textContent = arrayCalculosEdades[0];
	document.querySelector("#resultado-edad-minima").textContent = arrayCalculosEdades[1];
	document.querySelector("#resultado-edad-promedio").textContent = arrayCalculosEdades[2];
}

function calcularEdades(arrayEdades){
	const edadMaxima = calcularEdad("maximo",arrayEdades);
	const edadMinima = calcularEdad("minimo",arrayEdades);
	const edadPromedio = calcularEdad("promedio",arrayEdades);
	return [edadMaxima,edadMinima,edadPromedio];
}

function calcularEdad(funcion,array){
	return `${funcion}(${array})`;
}

function sacarEdadesInputs(){
	const $arrayEdades = document.querySelectorAll(".input-edad");
	let listaEdades = [];
	for (let i=0; i<$arrayEdades.length;i++){
		listaEdades.push($arrayEdades[i].value);	
	}
	console.log(listaEdades);			
	return listaEdades;
}

