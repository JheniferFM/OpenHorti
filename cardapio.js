async function carregarProdutos() {
    try {
        // Carrega o arquivo JSON
        const response = await fetch('./produtos-itf.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar os produtos');
        }
        const produtos = await response.json();

        const container = document.querySelector(".produtos");

        produtos.forEach(produto => {
            const div = document.createElement("div");
            div.classList.add("produto");

            // Caminho da imagem
            const imagemSrc = `../ImgFrutas/${produto.imagem}`;

            div.innerHTML = `
                <img src="${imagemSrc}" alt="${produto.nome}" onerror="this.src='../ImgFrutas/erro.jpeg';">
                <h2>${produto.nome}</h2>
                <p>${produto.preco}</p>
                <svg class="barcode"></svg>
            `;
            container.appendChild(div);

            let padrao = produto.format;

            const padraoPermitidos = {
                "ITF": () => {
                    const barcode = div.querySelector('.barcode');
                    JsBarcode(barcode, produto.codigo, {
                        format: "ITF",
                        lineColor: "#4b3621", // Cor marrom escura
                        width: 2,
                        height: 50,
                        displayValue: true
                    })
                },

                "CODE128": () => {
                    const barcode = div.querySelector('.barcode');
                    JsBarcode(barcode, produto.codigo, {
                        format: "CODE128",
                        lineColor: "#4b3621", // Cor marrom escura
                        width: 2,
                        height: 50,
                        displayValue: true
                    })
                }
            };
            if (padraoPermitidos[produto.format]) {
                padraoPermitidos[produto.format]();
            } else {
                console.warn("Item:", produto.nome, " possui codigo com padrao diferente de ITF e CODE128!", "\nPadrao fornecido: ", produto.format);
            }
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Carrega todos os produtos ao abrir a página
window.onload = carregarProdutos;