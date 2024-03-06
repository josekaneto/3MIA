const prompt = require("prompt-sync")()

const getInfo = () => {
    let velo = prompt("Em qual velocidade voce estava? ")
    return velo

}

const calcMuta = (velocidade) => {
    if(velocidade > 60){
        let multa = velocidade - 60 
        return multa * 100
    }
    else {
        console.log("Você estava no limite de velocidade")
    }
    return velocidade
}

const main = () =>{
    let infos = getInfo()
    let resultado = calcMuta(infos)
    console.log(`Você ultapassou o limite de velocidade por ${infos - 60}km/hr o preço da multa é ${resultado}R$`)
}

main()