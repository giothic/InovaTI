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


document.getElementById('toggle-aside').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
  });
