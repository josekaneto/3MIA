const prompt = require("prompt-sync")()

const getNum = () => {
    let num1 = prompt("Digite o primeiro número ")
    let num2 = prompt("Digite o segundo número ")
    let num3 = prompt("Digite o terceiro número ")

    return{ 
       numero1: num1,
       numero2: num2,
       numero3: num3
}
}

const calcMaior = (numero1, numero2, numero3) => {
    if(numero1 > numero2 && numero1 > numero3){
        return numero1, numero2, numero3
    }
    if(numero2 > numero1 && numero2 > numero3){
        return numero1, numero2, numero3
    }
    if(numero3 > numero1 && numero3> numero2){
        return numero1, numero2, numero3
    }

    return numero1, numero2, numero3
}

const main = () => {
    let infos = getNum()
    let number1 = infos.numero1
    let number2 = infos.numero2
    let number3 = infos.numero3
    let resultado = calcMaior(number1, number2, number3)
    console.log("O maior número é " +resultado)
}
main()
