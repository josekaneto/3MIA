const prompt = require("prompt-sync")()

function getUserInfo(){
    let weight = prompt("Digite seu peso: ")
    let height = prompt("Digite sua altura: ")

    return{
        peso: weight,
        altura: height
    }
}

function calcImc(pesoInformado, alturaInformada){

    return pesoInformado / alturaInformada ** 2

}

function main(){
    // guarda o objeto do getUserInfo
    let userData = getUserInfo()
    // Guarda somento o peso
    let peso = userData.peso
    // Guarda somento a altura
    let altura = userData.altura
    // Guarda o resultado
    let resultadoImc = calcImc(peso,altura).toFixed(1)

    if(resultadoImc <= 18.5){
        console.log(`Seu IMC é: ${resultadoImc} e você esta com baixo peso`)
    }
    else if(resultadoImc > 18.5 && resultadoImc <= 24.9){
        console.log(`Seu IMC é: ${resultadoImc} e você esta com peso normal`)
    }
    else{
        console.log(`Seu IMC é: ${resultadoImc} e você esta com sobrepeso`)
    }

}
main()

function imprimir(nome){
    console.log(nome)
}

const imprimir = nome => console.log("olá")


