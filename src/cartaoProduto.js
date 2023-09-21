import { adicionarAoCarrinho } from "./menuCarrinho"
import { catalogo } from "./utilidades"


export function renderizarCatalogo() {
    for (const produtoCatalogoo of catalogo) {
        const cartaoProduto =
            `<div id="card-produto-1" class=" flex w-80 m-2 items-center flex-col group shadow-lg rounded-lg">
            <img
                src="../../assets/img/${produtoCatalogoo.imagem}"   
                alt="Produto 1 do TtCommerce"        
                class="hover:scale-105 p-4"            
            />
            <div class="flex items-start flex-col w-80 p-4">            
                <p class="text-stone-950 font-bold font-mono text-xl" >${produtoCatalogoo.marca}</p>
                <p class="text-stone-400 text-[16px]">${produtoCatalogoo.nome}</p>
                <div class="flex items-start flex-row">
                    <p class="mr-2 line-through">${produtoCatalogoo.preco}</p>
                    <p class="mb-[8px]">${produtoCatalogoo.promocional}</p>
                </div>       
            </div>
            <div class="flex items-start flex-col w-80">
                <button 
                    id='adicionar-${produtoCatalogoo.id}'
                    class= "bg-[#F1EFEF] text-[#191717] w-full hover:bg-[#7d7c7c52] h-[30px] rounded-lg">
                <i class="fa-solid fa-cart-plus"></i>
                </button> 
            </div>          
        </div>`

        document.getElementById("container-produto").innerHTML += cartaoProduto
    }

    for (const produtoCatalogoo of catalogo) {
        document
            .getElementById(`adicionar-${produtoCatalogoo.id}`)
            .addEventListener('click', () => adicionarAoCarrinho(produtoCatalogoo.id))
    }
}
