
let allProdutos = [];

// Load the JSON and display products
async function loadProdutos() {
    try {
        const res = await fetch("produtos-itf.json");
        if (!res.ok) throw new Error("Erro ao carregar os produtos");

        allProdutos = await res.json();
        displayProdutos(allProdutos);
    } catch (error) {
        console.error("Erro:", error);
    }
}

// Display filtered products
function displayProdutos(produtos) {
    const container = document.querySelector(".produtos");
    container.innerHTML = "";

    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produto");

        const imagemSrc = `../ImgFrutas/${produto.imagem}`;

        div.innerHTML = `
            <img src="${imagemSrc}" alt="${produto.nome}" onerror="this.src='../ImgFrutas/erro.jpeg';">
            <h2>${produto.nome}</h2>
            <p>${produto.preco}</p>
            <svg class="barcode"></svg>
        `;
        container.appendChild(div);

        const barcode = div.querySelector(".barcode");

        const padroes = {
            "ITF": () => {
                JsBarcode(barcode, produto.codigo, {
                    format: "ITF",
                    lineColor: "#4b3621",
                    width: 2,
                    height: 50,
                    displayValue: true
                });
            },
            "CODE128": () => {
                JsBarcode(barcode, produto.codigo, {
                    format: "CODE128",
                    lineColor: "#4b3621",
                    width: 2,
                    height: 50,
                    displayValue: true
                });
            }
        };

        if (padroes[produto.format]) {
            padroes[produto.format]();
        } else {
            console.warn("Item:", produto.nome, " possui codigo com padrao diferente de ITF e CODE128!", "Padrao fornecido:", produto.format);
        }
    });
}

// Filter logic
document.addEventListener("DOMContentLoaded", () => {
    loadProdutos();

    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        const termo = searchInput.value.toLowerCase();
        const filtrados = allProdutos.filter(prod =>
            prod.nome.toLowerCase().includes(termo) ||
            prod.codigo.includes(termo)
        );
        displayProdutos(filtrados);
    });
});
