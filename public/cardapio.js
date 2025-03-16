// Função para gerar código de barras
function gerarCodigoDeBarras(info, elemento) {
    // Usa a biblioteca JsBarcode para gerar o código de barras
    JsBarcode(elemento, info, {
        format: "CODE128", // Formato do código de barras
        displayValue: true, // Exibe o valor abaixo do código
        fontSize: 16, // Tamanho da fonte do valor
        background: "#fff8dc", // Cor de fundo (igual ao fundo do produto)
        lineColor: "#556b2f", // Cor das barras (verde escuro)
    });
}

// Função para gerar códigos de barras para todos os produtos
function gerarCodigosDeBarras() {
    // Seleciona todos os elementos com a classe .produto
    const produtos = document.querySelectorAll('.produto');

    // Para cada produto, gera um código de barras
    produtos.forEach(produto => {
        // Pega o nome do produto (texto dentro da tag <h2>)
        const nome = produto.querySelector('h2').textContent;

        // Seleciona o elemento <svg> onde o código de barras será renderizado
        const codigoBarrasDiv = produto.querySelector('.barcode');

        // Verifica se o elemento .barcode existe
        if (codigoBarrasDiv) {
            // Gera o código de barras com o nome do produto
            gerarCodigoDeBarras(nome, codigoBarrasDiv);
        } else {
            // Exibe um erro no console se o elemento .barcode não for encontrado
            console.error("Elemento .barcode não encontrado no produto:", nome);
        }
    });
}

// Executa a função para gerar os códigos de barras quando a página carregar
window.onload = gerarCodigosDeBarras;