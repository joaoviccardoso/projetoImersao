const btnEscuroClaro = document.querySelector('#btn_modoClaroEscuro');
const elementoBody = document.querySelector('body');
const imgLupaPesquisa = document.querySelector('.lupaPesquisa');
const modoclaroP = document.querySelector('.modoclaroP'); 
const imgSolOuLua = document.querySelector('.img_modoEscuro'); 

let imgSol = "src/imagens/Icones/sun.svg"
let imgLua = "src/imagens/Icones/moon (1).svg"
lupaClara = "src/imagens/Icones/search-branco.svg"
lupaEscura = "src/imagens/Icones/magnifying-glass.svg"

btnEscuroClaro.addEventListener('click', () =>{
    
    const btnTexto = btnEscuroClaro.textContent
    console.log(btnTexto)
    if (elementoBody.classList.contains("claro")){
        modoclaroP.textContent = "Claro"
        imgSolOuLua.src = imgSol
        imgLupaPesquisa.src = lupaClara
        
    } else {
        modoclaroP.textContent = "Escuro"
        imgSolOuLua.src = imgLua
        imgLupaPesquisa.src = lupaEscura
    }
    elementoBody.classList.toggle("claro")
})

