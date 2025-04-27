//El programa pedirá al usuario la medida de un lado del cuadrado y mostrará el resultado po una alerta
//Crear las variables, pedir los datos con promts y almacenarlos en las variable y luego hacer la operación. Al final mostrar con "alert()" el resultado
/*
alert("Saludos!")
let area;
let lado = parseFloat(prompt("Ingrese el lado:"));
console.log(typeof lado);
console.log(typeof lado);
area = lado ** 2;
alert("El área del cuadrado con lado " + lado + " es " + area); */


/* 
ATM
Vamos a crear un programa que simule la interación con un ATM
Este debe tener la posibilidad de hacer las siguientes operaciones
-Depositar
Retirar
Ver Saldo
Pagar Servicios(opcional)

Usar 
-Declaración de variables
-Usar "prompt()" para pedir datos
-Usar "alert()" para mostrar datos o mensajes
-Usar Condicionales(if y else)
-Opcional(Switch case)
*/

alert("Bienvenido")

let idioma = prompt("Ingrse un idioma: \n1-Español \n2-English\n\n o ingrese otro idioma");

if (idioma === "1") {
    console.log("Español")
}
if (idioma === "2") {
    console.log("Emglish")
} else {
    console.log(idioma);
}

let operacion = prompt("Que desea hacer: \n1-Deposito \n2-Retiro\n3-Consultar Saldo\n4-Pagos");

if (idioma === "1") {
    console.log("Seleccionó Deposito")
}
if (idioma === "2") {
    console.log("Seleccionó Retiro")
}
if (idioma === "3") {
    console.log("Seleccionó Consultar Saldo")
}
if (idioma === "4") {
    console.log("Seleccionó Pagos")
} else {
    console.log("Seleccionar operacion correcta");
}