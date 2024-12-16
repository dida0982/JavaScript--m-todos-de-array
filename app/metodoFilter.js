// Seleciona todos os elementos HTML com a classe 'btn' e armazena em uma constante chamada 'botoes'
const botoes = document.querySelectorAll('.btn')

// Adiciona um evento de clique a cada botão selecionado; o evento chama a função 'filtrarLivros'
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Define a função que será chamada ao clicar em um botão
function filtrarLivros() {
    // Obtém o elemento HTML do botão clicado, utilizando o ID do botão
    const elementoBtn = document.getElementById(this.id)

    // Obtém o valor associado ao botão clicado, que será usado para filtrar os livros
    const categoria = elementoBtn.value

    // Filtra os livros: se a categoria for 'disponivel', filtra apenas os disponíveis; caso contrário, filtra por categoria
    let livrosFiltrados = categoria == 'disponivel' 
        ? filtrarPorDisponibilidade() 
        : FiltrarPorCategoria(categoria)

    // Exibe os livros filtrados na tela
    exibirOsLivrosNaTela(livrosFiltrados)

    // Caso a categoria seja 'disponivel', calcula o valor total dos livros disponíveis e exibe na tela
    if (categoria == 'disponivel') {
        // Calcula o valor total dos livros disponíveis
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        
        // Exibe o valor total na tela
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

// Define a função para filtrar os livros por categoria
function FiltrarPorCategoria(categoria) {
    // Retorna apenas os livros cuja categoria corresponda à passada como argumento
    return livros.filter(livro => livro.categoria == categoria)
}

// Define a função para filtrar os livros disponíveis
function filtrarPorDisponibilidade() {
    // Retorna apenas os livros cuja quantidade seja maior que zero
    return livros.filter(livro => livro.quantidade > 0)
}

// Define a função para exibir o valor total dos livros disponíveis na tela
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    // Altera o conteúdo HTML de um elemento específico para mostrar o valor total formatado
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
//  Resumo das principais operações:
// querySelectorAll: Seleciona vários elementos baseados em uma classe.
// addEventListener: Adiciona um ouvinte para eventos (neste caso, de clique).
// Funções de filtragem:
// Usam o método filter para retornar apenas os elementos que atendem a uma condição.
// Atualização de conteúdo na tela:
// Insere HTML dinamicamente no DOM usando innerHTML.
// Uso de if e operadores ternários:
// Realizam verificações condicionais para adaptar o comportamento dependendo do contexto.