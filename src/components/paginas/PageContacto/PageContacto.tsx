import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import Contacto from '../../componentes/Contacto/Contacto';
import './PageContacto.css';



function PageContacto() {
  return (
    <div className="PageContacto">
      <Header></Header>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default PageContacto;
