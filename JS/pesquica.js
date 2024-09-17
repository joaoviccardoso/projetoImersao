const btnPesquisar = document.querySelector('.pesquisarBtn');
// Seleciona o botão de pesquisa pelo seu identificador de classe.

const main = document.querySelector('.principal');
// Seleciona o elemento principal onde os resultados da pesquisa serão exibidos.

btnPesquisar.addEventListener('click', () => {
    // Adiciona um ouvinte de eventos para o botão. Quando o botão é clicado, a função dentro do event listener é executada.

    main.innerHTML = "";
    main.setAttribute("class", "secaoPesquica principal container" )

    let inputPesquisar = document.querySelector('.campoPesquisa').value;
    // Obtém o valor digitado pelo usuário no campo de pesquisa.

    let resultado = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let titulo = "";
    let genero = "";

    if (!inputPesquisar) {
        // Verifica se o usuário digitou algo no campo de pesquisa. Se não, exibe um alerta.
        alert('Coloque alguma informação no campo de pesquisa');
        return; // Interrompe a execução da função.
    }

    for (let dado of dadosArtista) {
        // Itera sobre cada elemento do array 'dadosIndicados' (assumindo que seja um array de objetos com as propriedades 'titulo', 'artista' e 'genero').

        titulo = dado.titulo.toLowerCase();
        genero = dado.genero.toLowerCase();
        // Converte as propriedades 'titulo', 'artista' e 'genero' para minúsculas para facilitar a comparação.

        const padronizarTitulo = removerAcentos(titulo);
        const padronizarGenero = removerAcentos(genero);
        // Remove os acentos das propriedades, melhorando a precisão da pesquisa.

        if (padronizarTitulo.includes(inputPesquisar) || padronizarGenero.includes(inputPesquisar)) {
            // Verifica se o valor pesquisado está presente em alguma das propriedades normalizadas.
            // Se sim, adiciona o elemento correspondente ao resultado da pesquisa.

            resultado += `
                <div class="containerArtista">
                    <a class="link-artista" href="${dado.link}">
                        <img class="img-artista" src="${dado.img}" alt="${dado.titulo}">
                        <h3 class="cartao__titulo">${dado.titulo}</h3>
                    </a>
                </div>    
                `;
        }
    }
 
    // Verifica se nenhum resultado foi encontrado e exibe um alerta.
    if (!resultado) {
        alert('Nem uma pesquisa foi encontrada');
    }

    // Atribui o HTML com os resultados da pesquisa ao elemento 'main'.
    main.innerHTML = resultado;
   
});

function removerAcentos(texto) {
    // Função para remover acentos de uma string.
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}