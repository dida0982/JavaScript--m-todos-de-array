function calcularValorTotalDeLivrosDisponiveis(livros) {
    // Usa o método reduce para calcular o valor total
    // 'acc' (acumulador) começa em 0 e é incrementado pelo preço de cada livro na lista
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

// Passo a passo:
// Definição da função:
// A função recebe como argumento uma lista de objetos livros, onde cada objeto contém informações como o preço do livro.

// reduce:
// O método reduce é usado para somar os preços dos livros. Ele percorre a lista acumulando o valor total:

// acc: O acumulador, que inicia com o valor 0 (passado como segundo argumento do reduce).
// livro: Cada item da lista de livros enquanto o método itera.
// Incremento do acumulador:
// Para cada livro, o preço (livro.preco) é somado ao acumulador (acc).

// Retorno com .toFixed(2):
// O resultado final da soma é convertido para uma string com duas casas decimais usando toFixed(2), garantindo um formato adequado para valores monetários.