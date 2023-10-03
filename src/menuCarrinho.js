import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {}

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

function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++
    atualizarInfoQuantidade(idProduto)
}
function decrementarQuantidadeProduto(idProduto){
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto)
    return;
  }
    idsProdutoCarrinhoComQuantidade[idProduto]--
    atualizarInfoQuantidade(idProduto)
}

function atualizarInfoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto]
}

function desenharProdutosNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
      document.getElementById('produtos-carrinho')
  const elementoArticle = document.createElement("article")
  const articleClasses = [
    'flex',
    'bg-slate-100',
    'rounded-lg',
    'items-center',
    'relative',
    'mt-[10px]']

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass)
  }

  const cartaoProdutoCarrinho = `
  <button id="remover-item-${produto.id}" class="top-0 right-0 absolute right-1">
    <i class="fa-regular fa-circle-xmark text-slate-400  hover:text-slate-900"></i>
  </button>
  <img 
      src="./assets/img/${produto.imagem}" 
      alt="Carrinho: ${produto.nome}"
      class="h-[7rem] rounded-lg" 
  />
  <div class="flex flex-col p-3 text-[17px]">
    <p class="text-slate-900">${produto.nome}</p>
    <p class="text-slate-400">Tamanho: M</p>
    <p class="text-darkgreen-900">${produto.preco}</p>
  </div>
  <div class=" text-slate-950 flex items-end absolute right-2 g-2  bottom-0">
    <button id='decrementar-produto-${produto.id}'>-</button>
    <p id='quantidade-${produto.id}' class="mr-2 ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
    <button id='incrementar-produto-${produto.id}'>+</button>
  </div>
`
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
  .getElementById(`decrementar-produto-${produto.id}`)
  .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));

    
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  renderizarProdutosCarrinho()
}

export function adicionarAoCarrinho(idProduto) {
  if(idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto)
    return;
  } 
    idsProdutoCarrinhoComQuantidade[idProduto]=1;
    desenharProdutosNoCarrinho(idProduto)
}

function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho =
  document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = '';
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutosNoCarrinho(idProduto)
  }
  
}