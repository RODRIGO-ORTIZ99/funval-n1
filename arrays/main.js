/*
let nombre = "Harold";
let edad = 26;

//arrays

let frutas = ["fresa", "mango", "platano", "asd", "piña"];

let arrayRandom = ["Diego", 23, -56.5, true["fresa", "mango", "platano", "asd", "piña"], {
    nombre: "Diego",
    apellido: "Huarsaya",
    edad: 27,
    estatura: 160,
}
]

console.log(arrayRandom[4][2]);
arrayRandom.push("Hola");
arrayRandom.push(12);

arrayRandom.pop();

console.log(arrayRandom[5].edad);
//objetos

let persona = {
    nombre: "Diego",
    apellido: "Huarsaya",
    edad: 27,
    estatura: 160,
    cursos: ["Math", "Geometry", "English"],
};

console.log(persona.apellido);
console.log(persona.cursos[2]);
*/

/*
let matriz = [
    [1, 2, 3, 5],
    [3, 4, 3, 7],
    [2, 4, 5, 8],
    [1, 2, 3, 4],
];

let sumaDiagonalPrincipal = 0;

for (let i = 0; i < matriz.length; i++) {
    sumaDiagonalPrincipal += matriz[i][i]; //ir sumando i como indice de cada renglon de la matriz

}

console.log("La suma de la diagonal principal es:", sumaDiagonalPrincipal);*/
/*
let numeros = [2, 4, 8, 10];

let nuevoArray = numeros.map(numero => numero * 3);
console.log(nuevoArray);
*/

/*let numeros = [2, 4, 8, 10];

let nuevoArray = numeros.map(numero => numero / 2);
console.log(nuevoArray);*/
/*
let numeros = [2, 4, 8, 10];

let numeroArray = numeros.filter((x) => x < 9);

console.log(nuevoArray);
*/
/*
let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7];

let nuevoArray = numeros.filter((x) => x % 2 === 0);

console.log(nuevoArray);

//find estuduar*/
/*
let nombres = ["cristian", 2, "ana", 777, "cris"]

let ordenado = nombres.sort();

let numeros = [4, 2, 7, 8, 3];
let orden = numeros.sort();

console.log(ordenado);
*/
/*
let numeros = [2, 7, 8, 4, 23, 21, 76];
let valor = numeros.includes(5);

let apellidos = ["perez", "ramirez", "fernandez", "choque"]
let valor23 = apellidos.includes("perez");
console.log(valor23);*/

let estudiante = [{
    nombre: "Elias",
    edad: 18,
    nacionalidad: "Paraguay",
    notas: [50, 40, 30, 100],
},
{
    nombre: "Cristian",
    edad: 20,
    nacionalidad: "Bolivia",
    notas: [60, 80, 90, 80],
},
{
    nombre: "Gino",
    edad: 18,
    nacionalidad: "Chile",
    notas: [30, 20, 10, 10],
},
{
    nombre: "Luis",
    edad: 18,
    nacionalidad: "Peru",
    notas: [50, 40, 30, 100],
},
]