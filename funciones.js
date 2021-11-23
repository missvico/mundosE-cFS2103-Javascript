console.log(triple(5))

function triple(number){
    return number * 3
}

function sum(a, b){
    return a + b
}

function presentacion(edad, nombre){
    console.log(`Soy ${nombre} tengo ${edad} años`)
}

function listarArreglo(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}

const cuadruplicar = function(number){
    return number*4
}

const quintuplicar = (number)=>number*5

// Crear una función llamada "welcome" que reciba dos parámetros, un nombre y un género:
// Si el género especificado es F que devuelva un alert que diga “Bienvenida [nombre] a nuestra página.”
// Si el género especificado es M que devuelva un alert que diga “Bienvenido [nombre] a nuestra página.”
// Si el género no es F o M que devuelva un alert que diga “Bienvenidx [nombre] a nuestra página.”

function welcome(name, gender){
    if(gender==="F"){
        alert(`Bienvenida ${name} a nuestra pagina`)
    }else if(gender==="M"){
        alert(`Bienvenido ${name} a nuestra pagina`)
    }else{
        alert(`Bienvenidx ${name} a nuestra pagina`)
    }
}

// CALLBACKS

function bienvenido(name){
    console.log(`Bienvenido ${name}`)
}

function bienvenidoAlerta(name){
    alert(`Bienvenido ${name}`)
}

function despedida(name){
    alert(`Hasta mañana ${name} gracias por visitar nuestra pagina`)
}

function procesarEntradaUsuario(callback){
    let nombre = prompt("Cual es tu nombre?")
    callback(nombre)
}

procesarEntradaUsuario(bienvenido)