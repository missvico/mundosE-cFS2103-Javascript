console.log("Hello World");

//Variables LET y CONST
let firstName = "Victoria" // si se puede reasingar valor
const surname = "Di Liscia" // no se puede reasignar valor

//Tipos de Datos

const myUserName = "vicodl"; //STRING
const age = 25; //NUMBER
const knowsJavascript = true; //BOOLEAN

console.log(typeof myUserName) // devuelve string
console.log(typeof age) // devuelve number
console.log(typeof knowsJavascript) // devuelve boolean

// Ejercicio
const nombre = "Juan"
const edad = 30
const viveEnAmerica = true

console.log(nombre, edad, viveEnAmerica)

//************OPERADORES ARITMETICOS************//

let numberA = 20
let numberB = 6
let numberC = 6
let numberD = "20"
console.log(numberA + numberB) //SUMA
console.log(numberA - numberB) //RESTA
console.log(numberA * numberB) //MULTIPLICACION
console.log(numberA / numberB) //DIVISION
console.log(numberA % numberB) //RESTO

// numberA++ //Incremento
// numberB-- //Decremento

//************OPERADORES COMPARATIVOS************//

console.log(numberA < numberB) //false
console.log(numberA > numberB) // true

console.log(numberA <= numberB) //false
console.log(numberA >= numberB) // true

console.log(numberB >= numberC) // true
console.log(numberB <= numberC) // true

console.log(numberA===numberB) //false
console.log(numberB===numberC) //true
console.log(numberA===numberD) //false ES COMPARACION IGUALDAD ESTRICTA

console.log(numberA==numberD) // true --ES COMPARACION INESTRICA
// compara "20" con 20 y transforma el tipo de dato para que sean el mismo tipo de dato (pasa el string a numero)

console.log(numberA !== numberD) //true --  "20" con 20 ---> son distintos
console.log(numberA != numberD) //false -- transforma "20" a numero y ve que son el mismo numero

//************OPERADORES LOGICOS************//

//OR
let variableA = 0
let variableB = "Hola"
let variableC = undefined
let variableD = 1234

//VALORES FALSEY

console.log(Boolean(0)) //false
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(false))

//VALORES TRUTHY ---> TODOS LOS DEMAS

console.log(variableA || variableB || variableD)
console.log(variableB || variableD)
console.log(variableD || variableB)
console.log(variableC || variableA)
console.log(variableA || variableC)

//AND
console.log(variableA && variableB && variableD)
console.log(variableB && variableD)
console.log(variableD && variableB)
console.log(variableC && variableA)
console.log(variableA && variableC)

//NOT -> Negacion: retorna el valor booleano CONTRARIO
console.log(!variableA) //true
console.log(!variableB) //false
console.log(!variableC) //true
console.log(!variableD) //false

//DOBLE NOT !!
!!variableA // false --- es lo mismo que hacer Boolean(variableA)