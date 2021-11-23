//************FOR LOOPS************//

for(let i=0;i<4;i++){
    console.log("Ahora el contador vale: ",i)
}

// i vale 0 entonces i<4 es true
// console.log("Ahora el contador vale: 0")
// i++
// i vale 1 entonces i<4 es true 
// console.log("Ahora el contador vale: 1")
// i++
// i vale 2 entonces i<4 es true
// console.log("Ahora el contador vale: 2")
// i++
// i vale 3 entonces i<4 es true
// console.log("Ahora el contador vale: 3")
// i++
// i vale 4 entonces i<4 es FALSE
// FIN DEL LOOP

//************WHILE LOOPS************//
let i = 0
while(i<4){
    console.log("Ahora el contador vale: ",i)
    i++
}

//************ARRAYS************//

const persona = ["Vladimir", 22, true]
console.log(persona[0]) //Logueo en consola el primer elemento
console.log(persona[1]) //Logueo en consola el segundo elemento
console.log(persona[2])//Logueo en consola el tercer elemento

const edadEn10Anios = persona[1] + 10 //guardo y opero en una variable distinta

persona[1] = edadEn10Anios // cambio el valor de una propiedad
persona[3] = "Argentina" // agrego una propiedad
persona.length // me trae la cantidad de elementos (4)

//FOR LOOPS PARA ARREGLOS
for(let i=0;i<persona.length;i++){
    console.log(persona[i])
}

//ARRAY METHODS
let paisAnterior = persona.pop() //saca el ultimo elemento y lo gaurdamos en una variable
persona.push("Japon") // agrega un elemento al final
let nombreAnterior = persona.shift() // saca un elemento al principio y lo guardamos en una variable
persona.unshift()// saca un elemento al principo

// En un script, declarar un arreglo con mis tres películas favoritas en orden, y luego hacer las siguientes acciones:
// Agregar una película al final del arreglo
// Loguear en consola el largo del arreglo
// Utilizando un for loop, loguear en consola la siguiente frase para cada película:
// *Nombre de película* está *ranking* en mi lista de películas favoritas.
// Ej: “El padrino está 1° en mi lista de películas favoritas”

const peliculas = [
    "Harry Potter", 
    "Mision Imposible",
    "El Padrino"
]
console.log(peliculas)
console.log(peliculas.length)

peliculas.push("El Caballero de la Noche")

console.log(peliculas)
console.log(peliculas.length)

for(let i=0;i<peliculas.length;i++){
    const pelicula = peliculas[i]
    const ranking = i+1
    console.log(`${pelicula} está ${ranking} en mi lista de películas favoritas.`)
}