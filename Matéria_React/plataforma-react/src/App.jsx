
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { Section1 } from './pages/Home/Section1';
import { Section2 } from './pages/Home/Section2';
import { Section3 } from './pages/Home/Section3';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/login' element={<Login />} />
          <Route path='/section1' element={<Section1 />} />
          <Route path='/section2' element={<Section2 />} />
          <Route path='/section3' element={<Section3 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
