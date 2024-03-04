const prompt = require("prompt-sync")()

const getInfo = () => {
    let velo = prompt("Em qual velocidade voce estava? ")
    return{ 
        velocidade : velo
    }
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
    let ultapassagem = infos.velocidade
    let resultado = calcMuta(ultapassagem)
    console.log(`Você ultapassou o limite de velocidade por ${ultapassagem - 60}km/hr o preço da multa é ${resultado}R$`)
}

main()