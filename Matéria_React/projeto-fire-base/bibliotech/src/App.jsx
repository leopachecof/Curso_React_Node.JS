import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";

export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    //Monitorar/detectar o usuário conectado
    // Fica sabendo
    onAuthStateChanged(auth, (user) => {
      //user é nulo = deslogado
      //user tem objeto = logado
      setUsuarioLogado(user);
    });

    //Esse efeito irá rodar apenas uma vez
    //Quando o App for renderizado/iniciado
  }, []);

  return (
    <>
      <AuthContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
      <Toaster />
    </>
  );
}
