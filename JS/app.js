//pega a seçao indicados
const secaoCartoes = document.querySelector(".indicados");
//cria os elementos da secao indicados
for (let dado of dadosIndicados){
    secaoCartoes.innerHTML += `
        <li class="cartao">
            <a href="${dado.link}">
                <img class="cartao__imagem" src="${dado.img}" alt="${dado.artista} - ${dado.titulo}">
                <h3 class="cartao__titulo">${dado.titulo}</h3>
                <h4 class="cartao__subtitulo">${dado.artista}</h4>
            </a>
        </li>
    `
}

//pega a seçao popular
const secaoArtista = document.querySelector(".artista");
////cria os elementos da secao indicados
for (let dado of dadosArtista){
    secaoArtista.innerHTML += `
        <li class="cartao">
            <a href="${dado.link}">
                <img class="cartao__imagem" src="${dado.img}" alt="${dado.artista} - ${dado.titulo}">
                <h3 class="cartao__titulo">${dado.titulo}</h3>
            </a>
        </li>
    `
}