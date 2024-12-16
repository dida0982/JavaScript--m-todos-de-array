function aplicarDesconto(livros) {
    // Define o valor do desconto como 30% (0.3)
    const desconto = 0.3

    // Cria uma nova lista de livros com o desconto aplicado usando o método map
    livrosComDesconto = livros.map(livro => {
        // Retorna um novo objeto livro com o mesmo conteúdo, mas com o preço atualizado após aplicar o desconto
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })

    // Retorna a nova lista de livros com o desconto aplicado
    return livrosComDesconto
}


// Explicação detalhada:
// Definição do desconto:

// const desconto = 0.3: Define o valor do desconto como 30%. Esse valor será multiplicado pelo preço de cada livro.
// Uso do método map:

// livros.map: Itera sobre cada item do array livros, aplicando uma transformação em cada elemento. A função passada no map cria um novo array (livrosComDesconto) sem alterar o array original.
// Para cada livro:
// { ...livro }: Usa o operador spread para copiar as propriedades do objeto livro.
// preco: livro.preco - (livro.preco * desconto): Substitui a propriedade preco pelo valor reduzido, calculado como preco - (preco * desconto).
// Retorno da nova lista:

// return livrosComDesconto: Retorna a lista de livros atualizada, com os preços já aplicados o desconto.