const array = [1,6,3,7,8,2]

//FOREACH
function frasear(number, index){
    console.log(`El numero ${number} esta en la posicion ${index}`)
}
array.forEach(frasear) //el index es un argumento opcional

//FILTER
array.forEach((number)=>{
    console.log(number % 2)
})
//Chequea el BOOLEANO del retorno de la funcion callback y devuelve un arreglo SOLO CON LOS QUE DEVUELVEN VERDADERO
const arrayFiltrado = array.filter((number)=>{
    return number % 2 
})
console.log(arrayFiltrado)

//MAP
const arrayTriplicado = array.map((number)=>{
    return number * 3
})
console.log(arrayTriplicado)

//REDUCE
const sumaTotal = array.reduce((acc, currentNumber)=>{
    return acc + currentNumber
})
console.log(sumaTotal)

//SLICE
const primerSeccion =  array.slice(2,5)

//INCLUDES
const tieneAlCinco = array.includes(5)

//INDEX OF 
const indexOfSix = array.indexOf(6)

//SPLIT
const miNombre = "Victoria Di Liscia"
const miNombreEnArreglo = miNombre.split(" ")
const miNombreUnido = miNombreEnArreglo.join(" - ")

miNombre[0] //Los strings pueden tratarse como arreglos

// EJERCICIO

// Armar un script y declarar un arreglo con los nombres de 5 personas. Utilizando los array methods aprendidos hacer las siguientes acciones:
// Utilizando .forEach() loggear en la consola el nombre de las 5 personas.
// Utilizando .slice() guardar en una variable un nuevo arreglo que vaya desde la segunda hasta la cuarta persona. Loggear ese arreglo
// Utilizando .map() guardar en una variable un arreglo de números que indique la cantidad de letras que tiene cada nombre. Loggear ese arreglo.
// Utilizando .join() guardar en una variable un string que contenga a todos los nombres separados por un espacio. Loggear ese string.
// Utilizando .filter() guardar en una variable un arreglo de nombres que solo contenga a los nombres que terminan con la letra “a”. 

const exerciseArray = ["Pablo", "Agustin", "Sofia", "Sergio", "Oriana"]

exerciseArray.forEach(element => {
    console.log(element)
})

const arregloRecortado = exerciseArray.slice(1,5)

const wordsLength = exerciseArray.map((element)=>{
    return element.length
})

const allTheNames = exerciseArray.join(" ")

const filterFunction = (word) => {
    return word[word.length-1] === "a"
}

const namesFinishWithA = exerciseArray.filter(filterFunction)