
document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login realizado com sucesso!');
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert('Erro no login: ' + error.message);
    });
});


document.getElementById('signup-btn').addEventListener('click', () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Cadastro realizado com sucesso!');
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert('Erro no cadastro: ' + error.message);
    });
});


onAuthStateChanged(auth, (user) => {
  if (user) {
    toggleAuthState(true);
  } else {
    toggleAuthState(false);
  }
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Modo Claro";
  } else {
    toggleButton.textContent = "Modo Noturno";
  }
});