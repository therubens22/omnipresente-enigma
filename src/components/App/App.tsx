import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ListadoBlog from '../ListadoBlog/ListadoBlog';
import ListadoTalleres from '../ListadoTalleres/ListadoTalleres';
import SobreNosotros from '../SobreNosotros/SobreNosotros';
import Contacto from '../Contacto/Contacto';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListadoBlog></ListadoBlog>
      <Footer></Footer> 
      <ListadoTalleres></ListadoTalleres>
      <SobreNosotros></SobreNosotros>
      <Contacto></Contacto>
      
   
    </div>
  );
}

export default App;
