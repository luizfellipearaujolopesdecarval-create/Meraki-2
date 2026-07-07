let quantidade = 1;

function aumentar(){

    quantidade++;

    document.getElementById("qtd").innerHTML = quantidade;

}

function diminuir(){

    if(quantidade > 1){

        quantidade--;

        document.getElementById("qtd").innerHTML = quantidade;

    }

}

function adicionarCarrinho(){

    alert(
`Pedido adicionado!

Produto: Bolo Comum de Cenoura
Quantidade: ${quantidade}
Total: R$ ${quantidade*8},00`
);

}
