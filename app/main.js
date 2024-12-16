// Inicializa a variável 'livros' como um array vazio
let livros = []

// Define a URL do endpoint da API onde os dados dos livros estão disponíveis
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// Chama a função 'getBuscarLivrosDaAPI' para iniciar a busca dos livros
getBuscarLivrosDaAPI()

// Função assíncrona para buscar os livros da API
async function getBuscarLivrosDaAPI() {
    // Faz a requisição para a API e espera a resposta usando 'await'
    const res = await fetch(endpointDaAPI)

    // Converte a resposta da API para o formato JSON e atribui ao array 'livros'
    livros = await res.json()

    // Aplica desconto nos preços dos livros retornados pela API
    livros = aplicarDesconto(livros)

    // Exibe os livros com desconto na tela
    exibirOsLivrosNaTela(livros)
}


// Explicação detalhada das partes do código:
// 1. Inicialização das variáveis:
// let livros = []: Inicializa um array vazio que será preenchido com os dados dos livros obtidos da API.
// const endpointDaAPI: Armazena a URL do endpoint da API, que retorna os dados dos livros em formato JSON.
// 2. Função getBuscarLivrosDaAPI:
// É uma função assíncrona (marcada por async), o que significa que ela pode pausar sua execução em determinadas partes com o uso de await.
// a. Requisição à API:
// const res = await fetch(endpointDaAPI):
// O método fetch realiza a requisição HTTP para a URL da API.
// O await faz com que o código espere até que a resposta seja recebida antes de continuar.
// b. Conversão para JSON:
// livros = await res.json():
// Converte a resposta da API, que vem no formato de texto, para um objeto JavaScript utilizando o método .json().
// A conversão também é assíncrona, por isso o uso de await.
// c. Aplicação do desconto:
// livros = aplicarDesconto(livros):
// Chama a função aplicarDesconto para aplicar um desconto nos preços dos livros.
// Retorna um novo array de livros com os preços já ajustados.
// d. Exibição dos livros na tela:
// exibirOsLivrosNaTela(livros):
// Chama a função exibirOsLivrosNaTela para renderizar os livros no DOM.
// A lista exibida já inclui os preços com desconto.
// 3. Chamada inicial da função:
// getBuscarLivrosDaAPI():
// É chamada imediatamente após a declaração para buscar os livros assim que o script for carregado.
