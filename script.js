// =======================================
// DOCE INTERVALO
// Script Principal
// =======================================

// Carrinho
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ----------------------------
// Adicionar produto
// ----------------------------
function adicionarProduto(id){

    const produto = CONFIG.produtos.find(p => p.id === id);

    if(!produto) return;

    const existente = carrinho.find(item => item.id === id);

    if(existente){

        existente.quantidade++;

    }else{

        carrinho.push({
            ...produto,
            quantidade:1
        });

    }

    salvarCarrinho();

    alert("✅ Produto adicionado ao carrinho!");

}

// ----------------------------
// Salvar Carrinho
// ----------------------------
function salvarCarrinho(){

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

// ----------------------------
// Aumentar quantidade
// ----------------------------
function aumentar(id){

    const item = carrinho.find(p => p.id === id);

    if(item){

        item.quantidade++;

        salvarCarrinho();

        location.reload();

    }

}

// ----------------------------
// Diminuir quantidade
// ----------------------------
function diminuir(id){

    const item = carrinho.find(p => p.id === id);

    if(item){

        item.quantidade--;

        if(item.quantidade <= 0){

            carrinho = carrinho.filter(p => p.id !== id);

        }

        salvarCarrinho();

        location.reload();

    }

}

// ----------------------------
// Calcular Total
// ----------------------------
function calcularTotal(){

    let total = 0;

    carrinho.forEach(item=>{

        total += item.preco * item.quantidade;

    });

    return total.toFixed(2);

}

// ----------------------------
// Limpar Carrinho
// ----------------------------
function limparCarrinho(){

    localStorage.removeItem("carrinho");

}

// ----------------------------
// Enviar WhatsApp
// ----------------------------
function enviarWhatsApp(){

    const nome = document.getElementById("nome").value;

    const turma = document.getElementById("turma").value;

    const observacoes = document.getElementById("obs").value;

    const entrega = document.getElementById("entrega").value;

    let mensagem = `🧁 *${CONFIG.loja}*%0A%0A`;

    mensagem += `👤 Nome: ${nome}%0A`;

    mensagem += `🏫 Turma: ${turma}%0A%0A`;

    mensagem += `🍰 *Pedido*%0A`;

    carrinho.forEach(item=>{

        mensagem += `• ${item.nome}%0A`;

        mensagem += `Quantidade: ${item.quantidade}%0A`;

        mensagem += `Subtotal: ${CONFIG.moeda} ${(item.preco*item.quantidade).toFixed(2)}%0A%0A`;

    });

    mensagem += `💰 Total: ${CONFIG.moeda} ${calcularTotal()}%0A%0A`;

    mensagem += `📍 Entrega: ${entrega}%0A`;

    mensagem += `📝 Observações: ${observacoes}`;

    window.open(

        `https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`,

        "_blank"

    );

}
// ===============================
// Comprar Agora
// ===============================

function comprarAgora(){

    adicionarProduto(1);

    window.location.href = "finalizar.html";

}
