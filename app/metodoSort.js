// Seleciona o botão pelo seu ID 'btnOrdenarPorPreco' e armazena na variável 'btnOdenarPorPreco'
let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

// Adiciona um ouvinte de evento para o clique no botão, que chama a função 'ordenarLivrosPorPreco'
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

// Define a função que ordena os livros pelo preço
function ordenarLivrosPorPreco() {
    // Ordena a lista de livros usando o método sort, comparando os preços de cada livro
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    
    // Exibe os livros ordenados na tela
    exibirOsLivrosNaTela(lirvosOrdenados)
}

// Explicação detalhada de cada linha:
// getElementById:
// A função document.getElementById('btnOrdenarPorPreco') busca o elemento no DOM com o ID especificado (btnOrdenarPorPreco) e armazena-o na variável btnOdenarPorPreco.

// addEventListener:
// Aqui, adicionamos um ouvinte de evento ao botão selecionado. Quando o botão é clicado, a função ordenarLivrosPorPreco é executada.

// Definição da função ordenarLivrosPorPreco:
// Esta função realiza a ordenação dos livros com base no preço e exibe o resultado na tela.

// sort:

// O método sort é usado para ordenar a lista de livros.
// A função de comparação (a, b) => a.preco - b.preco:
// a.preco - b.preco: Ordena os livros em ordem crescente pelo preço.
// Se a.preco for menor que b.preco, retorna um valor negativo, colocando a antes de b.
// Se a.preco for maior que b.preco, retorna um valor positivo, colocando b antes de a.
