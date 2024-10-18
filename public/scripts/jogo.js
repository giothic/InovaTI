document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-aside');
    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content');
    const rodapeProjeto = document.querySelector('.rodape _projeto');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');

        navbar.classList.toggle('move-right');
        mainContent.classList.toggle('move-right');
        rodapeProjeto.classList.toggle('move-right');

        if (sidebar.classList.contains('active')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });
});


const cartas = [
    { letra: 'A', imagem: 'img/libras1.png' },
    { letra: 'B', imagem: 'img/libras2.png' },
    { letra: 'C', imagem: 'img/libras3.png' },
    { letra: 'D', imagem: 'img/libras4.png' },
    { letra: 'E', imagem: 'img/libras5.png' },
    { letra: 'F', imagem: 'img/libras6.png' },
    { letra: 'G', imagem: 'img/libras7.png' },
    { letra: 'H', imagem: 'img/libras8.png' },
    { letra: 'I', imagem: 'img/libras9.png' },
    { letra: 'J', imagem: 'img/libras10.png' },
    { letra: 'K', imagem: 'img/libras11.png' },
    { letra: 'L', imagem: 'img/libras12.png' },
    { letra: 'M', imagem: 'img/libras13.png' },
    { letra: 'N', imagem: 'img/libras14.png' },
    { letra: 'O', imagem: 'img/libras15.png' },
    { letra: 'P', imagem: 'img/libras16.png' },
    { letra: 'Q', imagem: 'img/libras17.png' },
    { letra: 'R', imagem: 'img/libras18.png' },
    { letra: 'S', imagem: 'img/libras19.png' },
    { letra: 'T', imagem: 'img/libras20.png' },
    { letra: 'U', imagem: 'img/libras21.png' },
    { letra: 'V', imagem: 'img/libras22.png' },
    { letra: 'W', imagem: 'img/libras23.png' },
    { letra: 'X', imagem: 'img/libras24.png' },
    { letra: 'Y', imagem: 'img/libras25.png' },
    { letra: 'Z', imagem: 'img/libras26.png' },
    { letra: '0', imagem: 'img/0.png' },
    { letra: '1', imagem: 'img/1.png' },
    { letra: '2', imagem: 'img/2.png' },
    { letra: '3', imagem: 'img/3.png' },
    { letra: '4', imagem: 'img/4.png' },
    { letra: '5', imagem: 'img/5.png' },
    { letra: '6', imagem: 'img/6.png' },
    { letra: '7', imagem: 'img/7.png' },
    { letra: '8', imagem: 'img/8.png' },
    { letra: '9', imagem: 'img/9.png' },
];

const cardContainer = document.getElementById('cardContainer');

cartas.forEach(cart => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.letra = cart.letra; // Armazena a letra ou número

    const img = document.createElement('img');
    img.src = cart.imagem; // Caminho para a imagem
    img.alt = `Imagem de ${cart.letra} em Libras`;
    card.appendChild(img);

    card.addEventListener('click', () => {
        revelarCarta(card); // Chama a função para revelar a carta
    });

    cardContainer.appendChild(card); // Adiciona a carta ao contêiner
});

function revelarCarta(card) {
    if (card.classList.contains('revealed')) return; // Se já foi revelada, não faz nada

    card.classList.add('revealed'); // Revela a carta

    const respostaUsuario = prompt("Que letra ou número é?").toUpperCase(); // Pergunta ao usuário
    const respostaCorreta = card.dataset.letra; // Resposta correta

    if (respostaUsuario === respostaCorreta) {
        alert("Correto! Você pode avançar para a próxima carta."); // Resposta certa
    } else {
        alert(`Incorreto. A resposta correta é ${respostaCorreta}`); // Resposta errada
        card.classList.remove('revealed'); // Se errar, esconde a carta
    }
}