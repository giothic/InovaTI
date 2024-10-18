          // Função para abrir o modal
          function openModal() {
            document.getElementById('myModal').style.display = 'flex';
        }

        // Função de exibir modal ao carregar a página Biblioteca
        window.onload = function() {
            openModal(); // Se você quiser abrir automaticamente ao carregar, descomente esta linha
        };

        // Evento de clique na barra de pesquisa
        document.getElementById('searchBar').addEventListener('click', openModal);

        // Fechar modal ao clicar no "X"
        document.getElementsByClassName('close')[0].onclick = function() {
            document.getElementById('myModal').style.display = 'none';
        };

        // Fechar modal ao clicar fora do modal
        window.onclick = function(event) {
            const modal = document.getElementById('myModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        // Função de busca ao clicar no botão dentro do modal
        document.getElementById('searchButtonModal').addEventListener('click', function() {
            const query = document.getElementById('searchInputModal').value;
            const apiKey = 'AIzaSyAFm8C9Cc5kViMCUnc0iZBTB5iz9yxlMis'; // Substitua pela sua chave de API
            const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const resultsDiv = document.getElementById('results');
                    resultsDiv.innerHTML = ''; // Limpa resultados anteriores

                    if (data.items) {
                        data.items.forEach(item => {
                            const bookDiv = document.createElement('div');
                            bookDiv.classList.add('book');

                            const title = item.volumeInfo.title || 'Sem título';
                            const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconhecido';
                            const publishedDate = item.volumeInfo.publishedDate || 'Data não disponível';
                            const thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '';
                            const previewLink = item.volumeInfo.previewLink ? item.volumeInfo.previewLink : '#';

                            bookDiv.innerHTML = `
                                <img src="${thumbnail}" alt="Capa do livro">
                                <h3>${title}</h3>
                                <p><strong>Autor(es):</strong> ${authors}</p>
                                <p><strong>Publicado em:</strong> ${publishedDate}</p>
                                <p><a href="${previewLink}" target="_blank">Visualizar Livro</a></p>
                            `;
                            resultsDiv.appendChild(bookDiv);
                        });
                    } else {
                        resultsDiv.innerHTML = '<p>Nenhum livro encontrado.</p>';
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    document.getElementById('results').innerHTML = '<p>Erro ao buscar livros.</p>';
                });

            document.getElementById('searchInputModal').value = '';
         });