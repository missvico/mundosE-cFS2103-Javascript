//PROMESAS

const miFirstPromise = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(result => result.json())
        .then(json => console.log(json))
        .catch(error=> console.log(error))
}

const miFirstAsyncFunction = async () => {
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await result.json()
        console.log(json)
    }catch(error){
        console.log(error)
    }
}


// Utilizando la API de Starwars: https://swapi.dev/ crear la función getCharacter que reciba como argumento el numero de id de un personaje y que loguee en consola la siguiente frase:
// “El nombre del personaje seleccionado es [name]”
// Hacer la función utilizando .then() y luego utilizando async await


const getPeopleAsync = async (id) =>  {
    try{
        const url = `https://swapi.dev/api/people/${id}`
        const response = await fetch(url)
        const person = await response.json()
        const responsePlanet = await fetch(person.homeworld)
        const planet = await responsePlanet.json()
        console.log(`person.name} nacio en ${planet.name}`)
    }catch(err){
        console.log(err)
    }   
}

const getPeoplePromise = (id) => {
    let name, getPeoplePromise
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(result => result.json())
        .then(json => fetch(json.homeworld))
        .then(result => result.json())
        .then(json => console.log(json))
        .catch(error=> console.log(error))
}

const getPeopleAll = async (id) =>  {
    try{
        const promiseUno = fetch(`https://swapi.dev/api/people/1`)
        const promiseDos = fetch(`https://swapi.dev/api/people/2`)

        const results = await Promise.all([promiseUno,promiseDos])
        const jsons = await Promise.all([results[0].json(),results[1].json()])

        console.log(jsons)
    }catch(err){
        console.log(err)
    }   
}