const prompt = require("prompt-sync")()

const getInfos = () => {
    let books = prompt("Digite quantos livros quer: ")
    return{
        livros: books
    }
    
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
    let books = infos.livros
    let resultado = calcBooks(books)
    console.log(`Você escolheu ${books} livros, o preço deles é  ${resultado}`)
}
main()


