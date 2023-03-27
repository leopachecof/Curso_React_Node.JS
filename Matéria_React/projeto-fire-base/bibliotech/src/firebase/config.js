
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZOOwMLvgqExzqveCwvIRbRRoT3LrXUaM",
  authDomain: "bibliotech-leopachecojsx.firebaseapp.com",
  projectId: "bibliotech-leopachecojsx",
  storageBucket: "bibliotech-leopachecojsx.appspot.com",
  messagingSenderId: "186864968535",
  appId: "1:186864968535:web:8d99e3e75dac4a487fd412"
};


//Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
//configurando o authentication e seus recursos
export const auth = getAuth(app);
//configura firastor e seus recursos
export const db = getFirestore(app);
//configura o Store e seus recursos de Uploadd
export const storage = getStorage(app);