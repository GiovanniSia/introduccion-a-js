function crearLabel(numero) {
    const nuevoLabel = document.createElement("label");
    nuevoLabel.textContent = `Edad del integrante n°${numero}:`;
    return nuevoLabel;
}

function crearInput() {
    const nuevoInput = document.createElement("input");
    nuevoInput.type = "number"
    nuevoInput.className = "input-edades";
    return nuevoInput;
}

function crearInputEdad(numero) {
    const nodoForm = document.querySelector("#inputs-edades");
    const nuevoDiv = document.createElement("div");

    const nuevoLabel = crearLabel(numero);
    const nuevoInput = crearInput();

    nodoForm.appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoLabel);
    nuevoDiv.appendChild(nuevoInput);
    nuevoDiv.className = "bloque-ingresar-eadad";
}

function crearBoton(texto) {
    const $boton = document.createElement("button");
    $boton.id = `boton-${texto}`;
    $boton.textContent = texto;
    document.querySelector("#inputs-edades").appendChild($boton);
}

function crearInputsEdades() {
    const cantidadIntegrantes = Number(document.querySelector("#input-integrantes").value);
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearInputEdad(i);
    }
}

function agregarTexto(tipo,texto){
    mostrarTexto();
    document.querySelector(`#${tipo}-edad`).textContent= texto;
}

function mostrarTexto(){
    document.querySelector("#texto-edades").className="";
}
function ocultarTexto(){
    document.querySelector("#texto-edades").className="oculto";
}
