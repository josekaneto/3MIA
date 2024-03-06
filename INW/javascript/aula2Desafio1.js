const prompt = require("prompt-sync")()

const getInfos = () => {
    let books = prompt("Digite quantos livros quer: ")
    return books

}

const calcBooks = (quantBooks) => {

    if(quantBooks <= 7){
      return quantBooks * 22
    }
    else if(quantBooks >= 7 ){
       return quantBooks * 15
    }
    
    return quantBooks
}
const main = () => {
    let infos = getInfos()
    let resultado = calcBooks(infos)
    console.log(`Você escolheu ${infos} livros, o preço deles é  ${resultado}`)
}
main()


