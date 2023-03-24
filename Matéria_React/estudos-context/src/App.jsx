import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

export function App() {
// true = tema mescuro ativo
// false = tema claro ativo

const [temaEscuro, setTemaEscuro] = useState(false);

  function alternar() {
    if (temaEscuro === true) {
      setTemaEscuro(false);
    } else {
      setTemaEscuro(true);
    }
  }

  return (
    <ThemeContext.Provider 
    value={{temaEscuro: temaEscuro, alternar: alternar}}> {/*neste caso entra duas chaves, pois se trata de um objeto */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

/*
Todos os exercícios feitos:
<CompPai />

// import { CompPai } from "./components/CompPai/CompPai";
// import { Propriedades } from "./components/Propriedades/Propriedades";
-------------------------------------

  EXEMPLOS DOS OBJETOS
As chaves representam javascript
logo teremos as representações abaixo:
string
string
Number
booleano
arrays
objetos

      <Propriedades 
      cidade="Ubajara" 
      estado="CE"
      preco={9}
      ligado={true}
      info={[1, 2, 3]}
      objeto={{ nome: "Almir", idade: 19 }}
      ></Propriedades>
    
    <hr />
    
      <Propriedades 
      cidade="Ubajara" 
      estado="CE"
      preco={9}
      ligado={true}
      info={[1, 2, 3]}
      objeto={{ nome: "Almir", idade: 19 }}
      ></Propriedades>
*/