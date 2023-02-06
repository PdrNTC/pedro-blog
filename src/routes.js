import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Dependencia para ajudar na rota das paginas
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './componentes/Menu'
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';
import NaoEncontrada from 'paginas/NaoEncontrada';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
        </Route>

        <Route path="/posts/:id" element={<Post/>}/>

        {/* 
          Na rota "/", a estrutura a ser renderizada é:
          PaginaPadrao se torna Pai das rotas aninhadas filhas Inicio e SobreMim.
        */}

        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;
