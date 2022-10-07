import React from 'react';

import PageContacto from '../paginas/PageContacto/PageContacto'
import Index from '../paginas/Index/Index'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={< Index />}></Route>
          <Route path='/contact' element={< PageContacto />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
