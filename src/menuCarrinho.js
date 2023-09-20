import { catalogo } from "./utilidades";

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =
        document.getElementById('produtos-carrinho')
    const cartaoProdutoCarrinho = ` <article class="flex bg-slate-100 rounded-lg items-center relative mt-[20px]">
    <button id="fechar-carrinho" class="top-0 right-0 absolute right-1">
      <i class="fa-regular fa-circle-xmark text-slate-400  hover:text-slate-900"></i>
    </button>
    <img 
        src="./assets/img/${produto.imagem}" 
        alt="Carrinho: ${produto.nome}"
        class="h-24 rounded-lg" 
    />
    <div class="flex flex-col p-3 text-[17px]">
      <p class="text-slate-900">${produto.nome}</p>
      <p class="text-slate-400">Tamanho: M</p>
      <p class="text-darkgreen-900">${produto.preco}</p>
    </div>
  </article>`
    containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
