import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import ListadoBlog from '../../componentes/ListadoBlog/ListadoBlog';
import ListadoTalleres from '../../componentes/ListadoTalleres/ListadoTalleres';
import SobreNosotros from '../../componentes/SobreNosotros/SobreNosotros';
import Contacto from '../../componentes/Contacto/Contacto';
import './Index.css';



function Index() {
  return (
    <div className="Index">
      <Header></Header>
      <ListadoBlog></ListadoBlog>
      <Footer></Footer> 
      <ListadoTalleres></ListadoTalleres>
      <SobreNosotros></SobreNosotros>
      <Contacto></Contacto>
      
   
    </div>
  );
}

export default Index;
