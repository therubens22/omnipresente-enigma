import React from 'react';

import PageContacto from '../paginas/PageContacto/PageContacto'
import Index from '../paginas/Index/Index'
import PageNosotros from '../paginas/PageNosotros/PageNosotros';
import PageCursos from '../paginas/PageCursos/PageCursos';
import PageEntrada from '../paginas/PageEntrada/PageEntrada';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={< Index />}></Route>
          <Route path='/contact' element={< PageContacto />}></Route>
          <Route path='/nosotros' element={< PageNosotros />}></Route>
          <Route path='/Cursos' element={< PageCursos />}></Route>
          <Route path='/ListadoBlog' element={< PageEntrada />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
