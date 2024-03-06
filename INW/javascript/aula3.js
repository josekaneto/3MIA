const btn1 = document.querySelector('button')
const lsitaFilmes = document.querySelector('#listaFilmes')


window.onload = () => {
    const valorDigitado = document.querySelector('#filmeInput').value
    const itemLista = document.createElement('li')
    lsitaFilmes.append(itemLista)
    itemLista.innerHTML = valorDigitado
    itemLista.style.backgroundColor = 'red'
    itemLista.classList.add(fundo-azul)
}