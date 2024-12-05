const elementoParaInserirLivros = document.getElementById('livro')

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach((livro) => {
      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.tiulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`;
    });
  }