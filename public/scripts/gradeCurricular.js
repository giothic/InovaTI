function calcularNotas() {
    // Captura as notas inseridas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const nota5 = parseFloat(document.getElementById('nota5').value);
    const nota6 = parseFloat(document.getElementById('nota6').value);

    // Lista de disciplinas e notas
    const disciplinas = ['Algoritmos', 'Cálculo I', 'Física I', 'Álgebra Linear', 'Estruturas de Dados', 'Sistemas Operacionais'];
    const notas = [nota1, nota2, nota3, nota4, nota5, nota6];

    // Limpa a tabela de resultados anteriores
    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = '';

    // Função para determinar status
    function determinarStatus(nota) {
        if (nota >= 7) {
            return 'Aprovado';
        } else if (nota >= 5) {
            return 'Exame';
        } else {
            return 'Reprovado';
        }
    }

    // Adiciona resultados à tabela
    for (let i = 0; i < disciplinas.length; i++) {
        const row = document.createElement('tr');
        const cellDisciplina = document.createElement('td');
        const cellNota = document.createElement('td');
        const cellStatus = document.createElement('td');

        cellDisciplina.textContent = disciplinas[i];
        cellNota.textContent = notas[i].toFixed(1);
        cellStatus.textContent = determinarStatus(notas[i]);

        row.appendChild(cellDisciplina);
        row.appendChild(cellNota);
        row.appendChild(cellStatus);

        resultBody.appendChild(row);
    }
}

function zerarNotas() {
    // Limpa o formulário de notas
    document.getElementById('gradeForm').reset();

    // Limpa a tabela de resultados
    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = '';
}

const toggleButton = document.getElementById('toggle-aside');
const sidebar = document.querySelector('.sidebar');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('main'); // Captura o elemento main

toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('active'); // Alterna a classe 'active' no sidebar
    navbar.classList.toggle('move-right'); // Move a navbar para a direita
    main.classList.toggle('move-right'); // Move o conteúdo principal para a direita

    // Adiciona ou remove a classe no-scroll dependendo do estado do sidebar
    document.body.classList.toggle('no-scroll', sidebar.classList.contains('active'));
})



  window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var pageHeight = document.documentElement.scrollHeight;

    // Checa se o usuário está no final da página (ou muito próximo)
    if (scrollPosition >= pageHeight - 10) {
        footer.style.display = 'block'; // Exibe o footer
    } else {
        footer.style.display = 'none'; // Oculta o footer quando não estiver no final
    }
});