import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ListadoBlog from '../ListadoBlog/ListadoBlog';
import ListadoTalleres from '../ListadoTalleres/ListadoTalleres';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListadoBlog></ListadoBlog>
      <Footer></Footer> 
      <ListadoTalleres></ListadoTalleres>
   
    </div>
  );
}

export default App;
