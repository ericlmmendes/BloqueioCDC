import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js';
import { getDatabase, ref, push, update, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6_5BNwbElzW0eC5301lJuhQ8wPqmJoKw",
  authDomain: "adega-lmevo.firebaseapp.com",
  databaseURL: "https://adega-lmevo-default-rtdb.firebaseio.com",
  projectId: "adega-lmevo",
  storageBucket: "adega-lmevo.firebasestorage.app",
  messagingSenderId: "21889372171",
  appId: "1:21889372171:web:566e0b09833a795d6df70e",
  measurementId: "G-DTXLL41ML2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar o objeto database e funções para uso em outros scripts
export { database, ref, push, update, onValue, remove };