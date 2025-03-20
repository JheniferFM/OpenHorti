// Gera códigos de barras para cada produto
document.querySelectorAll('.barcode').forEach((barcode, index) => {
    JsBarcode(barcode, produtos[index].codigo, {
        format: "CODE128",
        lineColor: "#4b3621",
        width: 2,
        height: 50,
        displayValue: false
    });
});
const produtos = [
    { nome: "Abacate", codigo: "1632955", preco: "R$ 7,00/kg" },
    { nome: "Avocado", codigo: "4814974", preco: "R$ 10,00/kg" },
    { nome: "Ameixa Nacional", codigo: "1637", preco: "R$ 8,00/kg" },
    { nome: "Ameixa Importada", codigo: "5606912", preco: "R$ 12,00/kg" },
    { nome: "Atemoia", codigo: "35858", preco: "R$ 15,00/kg" },
    { nome: "Banana Nanica", codigo: "1643973", preco: "R$ 3,50/kg" },
    { nome: "Banana Prata", codigo: "1646951", preco: "R$ 4,00/kg" },
    { nome: "Banana Maçã", codigo: "1661910", preco: "R$ 4,50/kg" },
    { nome: "Banana Terra", codigo: "4808915", preco: "R$ 5,00/kg" },
    { nome: "Banana Pacovan", codigo: "12657966", preco: "R$ 5,50/kg" },
    { nome: "Caqui Fuyu", codigo: "21843", preco: "R$ 6,00/kg" },
    { nome: "Caqui Rama Forte", codigo: "21700", preco: "R$ 6,50/kg" },
    { nome: "Carambola", codigo: "9109927", preco: "R$ 7,00/kg" },
    { nome: "Caju Tropical", codigo: "13080961", preco: "R$ 8,00/kg" },
    { nome: "Coco Seco Tropical", codigo: "1650967", preco: "R$ 6,00/un" },
    { nome: "Goiaba Vermelha Tropical", codigo: "6609989", preco: "R$ 4,00/kg" },
    { nome: "Kiwi", codigo: "1788974", preco: "R$ 10,00/kg" },
    { nome: "Kiwi Sun Gold", codigo: "73384961", preco: "R$ 12,00/kg" },
    { nome: "Laranja Pera", codigo: "2488999", preco: "R$ 4,00/kg" },
    { nome: "Laranja Importada", codigo: "8353964", preco: "R$ 5,00/kg" },
    { nome: "Laranja Lima", codigo: "1494", preco: "R$ 4,50/kg" },
    { nome: "Limão Taiti Tropical", codigo: "1805943", preco: "R$ 3,00/kg" },
    { nome: "Limão Siciliano", codigo: "53649902", preco: "R$ 8,00/kg" },
    { nome: "Maçã Red Importada", codigo: "1819977", preco: "R$ 6,00/kg" },
    { nome: "Maçã Nacional Fuji", codigo: "1827906", preco: "R$ 5,50/kg" },
    { nome: "Maçã Nacional Gala", codigo: "1825917", preco: "R$ 5,00/kg" },
    { nome: "Maçã Verde Importada", codigo: "5603934", preco: "R$ 7,00/kg" },
    { nome: "Mamão Formosa", codigo: "4766949", preco: "R$ 4,00/kg" },
    { nome: "Mamão Havaí/Papaya", codigo: "1815939", preco: "R$ 5,00/kg" },
    { nome: "Manga Rosa", codigo: "20326", preco: "R$ 6,00/kg" },
    { nome: "Pera Portuguesa", codigo: "7997963", preco: "R$ 8,00/kg" },
    { nome: "Pera Importada", codigo: "1851914", preco: "R$ 9,00/kg" },
    { nome: "Pera Asiática", codigo: "5266935", preco: "R$ 7,50/kg" },
    { nome: "Pêssego Importado", codigo: "14725919", preco: "R$ 10,00/kg" },
    { nome: "Pêssego Nacional", codigo: "1854993", preco: "R$ 8,00/kg" },
    { nome: "Pinha Tropical", codigo: "12390", preco: "R$ 12,00/kg" },
    { nome: "Romã", codigo: "71002", preco: "R$ 15,00/kg" },
    { nome: "Uva Importada Red Globe", codigo: "1719966", preco: "R$ 12,00/kg" },
    { nome: "Uva Itália Nacional", codigo: "1681", preco: "R$ 10,00/kg" },
    { nome: "Uva Nacional Betânia", codigo: "9246", preco: "R$ 9,00/kg" },
    { nome: "Manga Tommy", codigo: "1806921", preco: "R$ 6,50/kg" },
    { nome: "Manga Espada", codigo: "20325942", preco: "R$ 7,00/kg" },
    { nome: "Manga Palmer", codigo: "3718922", preco: "R$ 6,00/kg" },
    { nome: "Maracujá Tropical", codigo: "1832917", preco: "R$ 8,00/kg" },
    { nome: "Melão Orange", codigo: "7683974", preco: "R$ 5,00/kg" },
    { nome: "Melão Pele de Sapo", codigo: "20710925", preco: "R$ 6,00/kg" },
    { nome: "Melão Redinha", codigo: "2829953", preco: "R$ 5,50/kg" },
    { nome: "Melão Amarelo", codigo: "5181903", preco: "R$ 4,50/kg" },
    { nome: "Mexerica Ponkan", codigo: "1859990", preco: "R$ 3,50/kg" },
    { nome: "Mexerica Comum", codigo: "4177984", preco: "R$ 3,00/kg" },
    { nome: "Mexerica Morgot", codigo: "1861993", preco: "R$ 4,00/kg" },
    { nome: "Nectarina Importada", codigo: "3394946", preco: "R$ 10,00/kg" },
    { nome: "Nectarina Nacional", codigo: "1844", preco: "R$ 8,00/kg" },
    { nome: "Pitaya", codigo: "53845965", preco: "R$ 15,00/kg" },
    { nome: "Abacaxi Tropical", codigo: "1078181", preco: "R$ 5,00/un" },
    { nome: "Coco Verde Fruta", codigo: "165114", preco: "R$ 6,00/un" },
    { nome: "Melancia Tropical Grande", codigo: "1075102", preco: "R$ 6,00/kg" },
    { nome: "Melancia Sugar Baby", codigo: "10679945", preco: "R$ 5,50/kg" },
    { nome: "Morango", codigo: "2058910", preco: "R$ 8,00/kg" },
    { nome: "Uva Sweet Jubilee", codigo: "55701901", preco: "R$ 12,00/kg" },
    { nome: "Uva Red Globe", codigo: "", preco: "R$ 10,00/kg" },
    { nome: "Uva Thompson", codigo: "36877914", preco: "R$ 11,00/kg" },
    { nome: "Uva Vitória", codigo: "55702961", preco: "R$ 12,00/kg" },
    { nome: "Uva Benitaka", codigo: "36880971", preco: "R$ 10,00/kg" },
    { nome: "Uva Rubi", codigo: "41633991", preco: "R$ 9,00/kg" },
    { nome: "Uva Itália", codigo: "36879933", preco: "R$ 10,00/kg" },
    { nome: "Uva Crimson", codigo: "36876167", preco: "R$ 11,00/kg" },
    { nome: "Uva Niagara BDJ", codigo: "40599907", preco: "R$ 9,00/kg" },
    // Adicione os demais produtos aqui...
];

// Função para carregar os produtos no HTML
function carregarProdutos() {
    const container = document.querySelector(".produtos");
    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produto");
        div.innerHTML = `
            <img src="../imagens/${produto.nome.toLowerCase().replace(/ /g, '_')}.jpg" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.preco}</p>
            <svg class="barcode"></svg>
        `;
        container.appendChild(div);
    });
}

// Executa a função ao carregar a página
window.onload = carregarProdutos;