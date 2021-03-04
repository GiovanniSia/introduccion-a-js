// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function tarea(){
    //tarea1();
    //tarea2();
    //tarea3();
}


function tarea1() {
    const nombre = prompt("Cual es tu nombre?", "Maria").toLowerCase();
    if (nombre === "giovanni") {
        console.log(`Hola, Tocayo! Yo tambien me llamo ${nombre}`)
    } else if (nombre === "deisy") {
        console.log(`Hola ${nombre}, te llamas igual que mi perra`)
    } else {
        console.log(`Hola ${nombre}`);
    }
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
function tarea2() {
    const edadUsuario = Number(prompt("Ingrese su edad: ", 18));
    const miEdad = 21;
    if (edadUsuario > miEdad) {
        console.log("Ja, tas más viejo que yo pa");
    } else if (edadUsuario < miEdad) {
        console.log("Ja, tas más joven que yo pa :(");
    } else if (edadUsuario === miEdad) {
        console.log("Ja, tenemo la misma edad nashee");
    } else {
        console.log("Dale, pone lo que se te pide pel0tudo");
    }
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function tarea3() {
    const tieneDocumentoUsuario = (prompt("Tienes documento? si o no :", "no") || " ").toLowerCase();
    if (tieneDocumentoUsuario === "si") {
        const edadUsuario = (Number(prompt("Cuantos años tienes?", 18)) || " ");
        
        if (edadUsuario >= 18) {
            console.log("Puedes entrar al bar");
        } else if (edadUsuario < 18) {
            console.log("No puedes entrar al bar");
        } else {
            console.log("No entendi la respuesta a tu edad");
        }
    } else if (tieneDocumentoUsuario === "no") {
        console.log("No puedes entrar al bar");
    } else {
        console.log("No entendi la respuesta");
    }
}



tarea();