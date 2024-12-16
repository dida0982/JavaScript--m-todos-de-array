// Seleciona o elemento HTML onde os livros serão inseridos e armazena na constante 'elementoParaInserirLivros'
const elementoParaInserirLivros = document.getElementById('livros')

// Seleciona o elemento HTML que exibirá o valor total dos livros disponíveis e armazena na constante 'elementoComValorTotalDeLivrosDisponiveis'
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// Define a função para exibir os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {
    // Limpa o conteúdo HTML do elemento de valor total, caso algo já esteja exibido
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''

    // Limpa o conteúdo HTML do elemento de livros, para evitar duplicações
    elementoParaInserirLivros.innerHTML = ''

    // Itera sobre a lista de livros passada como argumento
    listaDeLivros.forEach(livro => {
        // Verifica se o livro está disponível (quantidade maior que 0) e define a classe CSS correspondente
        let disponibilidade = livro.quantidade > 0 
            ? 'livro__imagens' 
            : 'livro__imagens indisponivel'

        // Adiciona dinamicamente o HTML de cada livro ao elemento 'elementoParaInserirLivros'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}

// Explicação detalhada das partes principais:
// Elementos HTML:

// getElementById('livros'): Seleciona o container onde os livros serão renderizados.
// getElementById('valor_total_livros_disponiveis'): Seleciona o container onde será exibido o valor total dos livros disponíveis.
// Função exibirOsLivrosNaTela:

// innerHTML = '': Limpa o conteúdo dos elementos antes de adicionar novos livros ou informações.
// forEach: Itera pela lista de livros, processando cada livro individualmente.
// Verificação de disponibilidade:

// Utiliza um operador ternário para determinar a classe CSS com base na disponibilidade do livro:
// livro__imagens: Quando o livro está disponível.
// livro__imagens indisponivel: Quando o livro está indisponível.
// Adição de HTML Dinâmico:

// Para cada livro, adiciona dinamicamente um bloco de HTML ao elemento elementoParaInserirLivros.
// Exibe as informações:
// livro.imagem: Caminho da imagem do livro.
// livro.alt: Texto alternativo para acessibilidade.
// livro.titulo: Título do livro.
// livro.autor: Nome do autor.
// livro.preco: Preço formatado com duas casas decimais.
// livro.categoria: Categoria do livro.
// Comentário da função verificarDisponibilidadeDoLivro:

// A lógica dessa função foi simplificada diretamente no operador ternário da variável disponibilidade.
// Se for necessário reutilizá-la em outros pontos do código, basta descomentar e chamar dentro da função.