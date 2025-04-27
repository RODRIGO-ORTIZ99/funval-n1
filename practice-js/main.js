/*
let nota = parseFloat(prompt("Ongrese su nota: "))
while (true){
if (nota>=18 && nota <=20) {
alert("Excelente")  
    break;  
} else if(nota>=14 && nota<18){
    alert("Bueno")  
    break;
} else if(nota>=11 && nota<14){
    alert("Regular")  
    break;
} else if(nota>=0 && nota<11){
    alert("Desaprobado")  
    break;
} else if(nota>20 || nota<0){
    alert("Dato no valido, ingrese un número")  
    break;
} else {
    alert("Dato no valido, ingrese un número")
}
}
*/

//alert("La table del 7 es: \n7x1=7\n7x2=14\n7x3=21\n7x1=7")
/*
let numero = parseInt(prompt("Ingrese el número para la tabla de multiplicar:"));

if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    let resultado = 0;
    for (let i = 1; i <= 12; i++) {
        resultado += numero;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    alert("Por favor, ingrese un número válido.");
}*/

/*let suma=0;
for (let index = 0; index < 101; index++) {
    suma = suma + index
    
}*/
/*
function calculadoraDeAreas() {
    const opcionTexto = prompt(
        "Calculadora de Áreas Geométricas:\n" +
        "1. Calcular área de un cuadrado\n" +
        "2. Calcular área de un rectángulo\n" +
        "3. Calcular área de un triángulo\n" +
        "Ingresa el número de la opción:");
    const opcion = parseInt(opcionTexto);
    if (opcion === 1) {
        const ladoTexto = prompt("Ingresa el lado del cuadrado:");
        const lado = parseFloat(ladoTexto);
        if (!isNaN(lado) && lado > 0) {
            const area = lado * lado;
            alert("El área del cuadrado es: " + area);
        } else {
            alert("Por favor, ingresa un número válido para el lado.");
        }
    } else if (opcion === 2) {
        const baseTexto = prompt("Ingresa la base del rectángulo:");
        const alturaTexto = prompt("Ingresa la altura del rectángulo:");
        const base = parseFloat(baseTexto);
        const altura = parseFloat(alturaTexto);
        if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
            const area = base * altura;
            alert("El área del rectángulo es: " + area);
        } else {
            alert("Por favor, ingresa números válidos para la base y la altura.");
        }
    } else if (opcion === 3) {
        const baseTexto = prompt("Ingresa la base del triángulo:");
        const alturaTexto = prompt("Ingresa la altura del triángulo:");
        const base = parseFloat(baseTexto);
        const altura = parseFloat(alturaTexto);
        if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
            const area = (base * altura) / 2;
            alert("El área del triángulo es: " + area);
        } else {
            alert("Por favor, ingresa números válidos para la base y la altura.");
        }
    } else if (!isNaN(opcion)) {
        alert("Opción no válida. Por favor, ingresa 1, 2 o 3.");
    } else if (opcionTexto !== null) {
        alert("Por favor, ingresa un número para elegir una opción.");
    } else {
        alert("Gracias por usar la calculadora de áreas.");
    }
}
calculadoraDeAreas();*/
/*
const points = function (dosPts, tresPts) {

    return dosPts * 2 + tresPts * 3
}
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

const legs = function (chickens, cows, pigs) {

    return chickens * 2 + cows * 4 + pigs * 4
}
console.log(legs(3, 4, 7));
console.log(legs(2, 5, 4));
console.log(legs(3, 6, 8));*/

/*
function calculadoraDeAreas() {
    const opcion = prompt(
        "Calculadora de Áreas Geométricas:\n" +
        "1. Calcular área de un cuadrado\n" +
        "2. Calcular área de un rectángulo\n" +
        "3. Calcular área de un triángulo\n" +
        "4. Calcular área de un triángulo\n" +
        "Ingresa el número de la opción:");

    if (opcion === 1) {
        const lado = prompt("Ingresa el lado del cuadrado:");
        const area = lado * lado;
        console.log("El área del cuadrado es: " + area);
    } else {
        console.log("Por favor, ingresa un número válido para el lado.");
    }
    if (opcion === 2) {
        const base = prompt("Ingresa la base del rectángulo:");
        const altura = prompt("Ingresa la altura del rectángulo:");
        const area = base * altura;
        alert("El área del rectángulo es: " + area);
    } else {
        alert("Por favor, ingresa números válidos para la base y la altura.");
    }
    if (opcion === 3) {
        const base = prompt("Ingresa la base del triángulo:");
        const altura = prompt("Ingresa la altura del triángulo:");
        const area = (base * altura) / 2;
        alert("El área del triángulo es: " + area);
    } else {
        alert("Por favor, ingresa números válidos para la base y la altura.");
    }
    if (opcion === 4) {
        const radio = prompt("Ingresa el radio del circulo:");
        const area = 3.141516 * radio * radio;
        alert("El área del circulo es: " + area);
    } else {
        alert("Por favor, ingresa números válidos para el radio.");
    }
}
calculadoraDeAreas();*/

alert("Bienvenido")
let figura = prompt(`El área de que figura quiere calcula
    1-cuadrado
    2-circulo
    3-rectangulo
    4-triangulo`)
switch (figura) {
    case "1":
        cuadrado();
        break;
    case "2":
        circulo();
        break;
    case "3":
        rectangulo();
        break;
    case "4":
        triangulo();
        break;

    default:
        break;
}
function cuadrado() {
    let lado = parseFloat(prompt("Ingrese el lado:"));
    alert("El área del cuadrado es " + lado ** 2);
}
function cuadrado() {
    let lado = parseFloat(prompt("Ingrese el lado:"));
    alert("El área del cuadrado es " + lado ** 2);
}
function cuadrado() {
    let lado = parseFloat(prompt("Ingrese el lado:"));
    alert("El área del cuadrado es " + lado ** 2);
}
function cuadrado() {
    let lado = parseFloat(prompt("Ingrese el lado:"));
    alert("El área del cuadrado es " + lado ** 2);
}