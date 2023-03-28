import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword, 
    signInWithPopup,
    signOut, 
} from "firebase/auth";
import { auth } from "./config";

//Função assíncrona = que o resultado não é obtido de imediato
//Haverá espera

export async function cadastrarEmailSenha(email, senha) {
    //indicar para o firebase que queremo cadastrar
    //um novo usuário utilizando email/senha
    const resultado = await createUserWithEmailAndPassword( auth, email, senha);

    return resultado.user;
}

export async function loginGoogle() {
    // Configurar como o login do Google vai funcionar
    const provider = new GoogleAuthProvider();
    const resultado = await signInWithPopup(auth, provider);
    return resultado.user;
}

export async function loginEmailSenha(email, senha) {
    // Vai realizar o login com uma conta
    const resultado = await signInWithEmailAndPassword(auth, email, senha);
    return resultado.user;
}

export async function logout() {
    //Deslogar o usuário atual do firebase
    await signOut(auth);
}