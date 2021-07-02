function maximo (array){
	let valorMax = array[0];
	for (let i=0; i < array.length; i++){
		if(array[i] > valorMax){
			valorMax = array[i];
		}
	}
	return valorMax;
}

function minimo (array){
	let valorMin = array[0];
	for (let i=0; i < array.length; i++){
		if(array[i] < valorMin){
			valorMin = array[i]; 
		}
	}
	return valorMin;
}

function promedio (array){
	let sumaTotal = 0;
	for (let i=0; i < array.length; i++){
		sumaTotal += array[i];
	}
	let promedio = sumaTotal;
	return promedio;
}