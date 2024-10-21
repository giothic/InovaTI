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

  // Certifique-se de importar o Firebase antes de qualquer serviço
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
  import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
  
  // Configuração do Firebase
  const firebaseConfig = {
      apiKey: "AIzaSyDrCRFEp578oqcJm7uzruWe-cbU_ZpZLHo",
      authDomain: "projetofinal-devfront.firebaseapp.com",
      projectId: "projetofinal-devfront",
      storageBucket: "projetofinal-devfront.appspot.com",
      messagingSenderId: "153065613348",
      appId: "1:153065613348:web:95860e84f52477ef6450b1",
      measurementId: "G-079F55DKF5"
  };
  
  // Inicializa o Firebase apenas uma vez
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  onAuthStateChanged(auth, async (user) => {
      if (user) {
          console.log("Usuário autenticado com UID: ", user.uid);
          try {
              const userDocRef = doc(db, "usuarios", user.uid);
              const userDoc = await getDoc(userDocRef);
              
              console.log("Buscando documento do usuário com UID:", user.uid); // Log para depuração
              
              if (userDoc.exists()) {
                  const userData = userDoc.data();
                  document.getElementById("user-name").textContent = userData.nome;
              } else {
                  console.log("Documento do usuário não encontrado.");
              }
          } catch (error) {
              console.log("Erro ao buscar o documento: ", error);
          }
      } else {
          console.log("Usuário não autenticado.");
          window.location.href = "login.html"; 
      }
  });


  const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
  const logo = document.getElementById('logo');
  
  // Função para aplicar o modo noturno
  function applyDarkMode(isDark) {
      document.body.classList.toggle('dark-mode', isDark);
      if (isDark) {
          logo.src = "./img/logo-dark.png"; // Logo para o modo escuro
      } else {
          logo.src = "./img/logo-claro.png"; // Logo para o modo claro
      }
  }
  
  // Verifica se o modo noturno está ativado no localStorage
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  applyDarkMode(isDarkMode);
  
  // Altera o modo ao clicar no botão
  toggleDarkModeBtn.addEventListener('click', function() {
      const isCurrentlyDark = document.body.classList.toggle('dark-mode');
      // Alterar ícone entre lua e sol
      const icon = toggleDarkModeBtn.querySelector('i');
      if (isCurrentlyDark) {
          icon.classList.remove('ri-moon-line');
          icon.classList.add('ri-sun-line');
      } else {
          icon.classList.remove('ri-sun-line');
          icon.classList.add('ri-moon-line');
      }
  
      // Salva a preferência no localStorage
      localStorage.setItem('dark-mode', isCurrentlyDark);
  
      // Atualiza a logo
      logo.src = isCurrentlyDark ? "./img/logo-dark.png" : "./img/logo-claro.png";
  });
  