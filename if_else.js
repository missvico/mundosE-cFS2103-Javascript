//IF ELSE

// Hacer una estructura que cumpla las siguientes condiciones:
// - Si saco menos de 4 desaprobo
// - Si saco entre 4 y 7 aprobo
// - Si saco 7 o mas promociono

//************INTERACCIONES************//
alert("Hola mundo")
let userName = prompt("Como te llamas?")
let respuesta = confirm("Queres entrar a la pagina?")

let nota = Number(prompt("que nota sacaste?"))

if(nota<4){
    alert("Desaprobo con: "+nota)
}else if(nota >= 4 && nota<7){
    alert("Aprobo con: "+nota)
}else{
    alert("Promociono con: "+nota)
}

//CON SOLO DOS CONDICIONES
if(nota<4){
    console.log("Desaprobo")
}else{
    console.log("Aprobo")
}

alert("Hola mundo")
let userAge = Number(prompt("Cual es tu edad"))

if(userAge<16){
    alert("No podes pasar")
}else if(userAge >= 16 && userAge<18){
    alert("Podes pasar pero al bar")
}else{
    alert("Podes pasar al bar")
}

//MISMO EJEMPLO AL REVES
if(userAge>18){
    alert("Podes pasar al bar")
}else if(userAge >= 16 && userAge<18){
    alert("Podes pasar pero al bar")
}else{
    alert("No podes pasar")
}