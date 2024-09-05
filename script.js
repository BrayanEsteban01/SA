function trocarImagem(src) {
    document.getElementById('main-img').src = src;
}

const produtosBest = [
    {nome: "Produto 4", precoOriginal: 100, precoDesconto: 80, imagem: "Imagens/produto4.png", desconto: 20},
    {nome: "Controle sem fio PS5 DualSense Branco", precoOriginal: 150, precoDesconto: 120, imagem: "Imagens/produto5.png", desconto: 20},
    {nome: "Produto 6", precoOriginal: 200, precoDesconto: 100, imagem: "Imagens/produto6.png", desconto: 50}
];

produtosBest.forEach(produto => {
    adicionarProduto('best-sellers', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const Perifericos = [


    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/MouseG.png", desconto: 33},    
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/TecladoG.png", desconto: 33},    
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/TecladoR.png", desconto: 33},    
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/TecladoRe.png", desconto: 33},    
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/TecladoG2.png", desconto: 33},    
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto7.png", desconto: 33},    



];

Perifericos.forEach(produto => {
    adicionarProduto('Perifericos', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosNovidades = [



    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto7.png", desconto: 33},    
    {nome: "Cadeira Escorpião", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/Cadeira.png", desconto: 33},
    {nome: "Case Deadpool Para Controle Xbox Series S/x", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/Deadpool.png", desconto: 33},    
    {nome: "Marvel Legends Homem De Ferro Capacete Eletronico Iron Man", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/Capacete.png", desconto: 33},    
    {nome: "Tapete de Dança", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/Tapete.png", desconto: 33},    
    
];

produtosNovidades.forEach(produto => {
    adicionarProduto('novidades', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosMelhores = [
    {nome: "Produto 9", precoOriginal: 400, precoDesconto: 200, imagem: "Imagens/Produto 9.png", desconto: 50},
    {nome: "Produto 9", precoOriginal: 400, precoDesconto: 200, imagem: "Imagens/produto8.png", desconto: 50},
    {nome: "Produto 9", precoOriginal: 400, precoDesconto: 200, imagem: "Imagens/produto8.png", desconto: 50},
    {nome: "Produto 8", precoOriginal: 400, precoDesconto: 200, imagem: "Imagens/produto8.png", desconto: 50},
    {nome: "Console Nintendo Switch Oled com Joy-Con, Branco", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto9.png", desconto: 33}
   


];

produtosMelhores.forEach(produto => {
    adicionarProduto('melhores-videogames', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosRecentes = []; 

function moverCarrossel(categoria, direcao) {
    const container = document.getElementById(categoria);
    const width = container.querySelector('.produto-item').offsetWidth;
    container.scrollLeft += width * direcao;
}

function adicionarProduto(categoria, nome, precoOriginal, precoDesconto, imagem, desconto) {
    const container = document.getElementById(categoria);

    const produtoHTML = `
        <div class="produto-item">
            <img src="${imagem}" alt="${nome}">
            <div class="produto-info">
                <h3>${nome}</h3>
                <p class="preco">
                    <span class="preco-original">R$ ${precoOriginal}</span>
                    <span class="preco-desconto">R$ ${precoDesconto}</span>
                    <span class="balao-desconto">${desconto}%</span>
                </p>
            </div>
        </div>
    `;
    container.innerHTML += produtoHTML;
}