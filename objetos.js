const persona = {
    nombre: "Orlando",
    edad: 30,
    viveEnAmerica: true,
    colores: ["negro", "azul"]
}
console.log(persona)

persona["pais"] = "Ecuador" // agrego una propiedad usando BRACKET NOTATION
persona.colores.push("rojo") // le agrego un color al arreglo
persona.edad = persona.edad + 10 // le agrego 10 al valor de la propuiedad edad

console.log(persona)

// Puedo pasar variables SOLO usando Bracket Notation
const propiedad = "viveEnAmerica"
console.log(persona[propiedad])
persona[propiedad] = false

console.log(persona.propiedad)

persona.edad = "treinta" //Puedo modificar el valor de una propiedad a un tipo de dato

// En un script, declarar un objeto con las siguientes propiedades: 
// nombre (string)
// edad(number)
// ciudad(string)
// bandasFavoritas(array) ARRAY DE DOS BANDAS *
// Loggear en consola una frase utilizando los valores de todas las propiedades, combinando dot notation y bracket notation.

//let concatenado = `${pelicula} está ${ranking} en mi lista de películas favoritas.`

const objeto = {
    nombre: "Victoria",
    edad: 25,
    ciudad: "Buenos Aires",
    bandas: ["Soda Stereo", "Seru Giran"]
}

const misBandasFavoritas = objeto.bandas.join(" ")

console.log(f)
console.log(`Mi nombre es ${objeto.nombre}, tengo ${objeto["edad"]} años y vivo en ${objeto.ciudad}. Mis bandas favoritas son ${objeto.bandas[0]} y ${objeto["bandas"][1]}`)
console.log(`Mi nombre es ${objeto.nombre}, tengo ${objeto["edad"]} años y vivo en ${objeto.ciudad}. Mis bandas favoritas son ${misBandasFavoritas}`)