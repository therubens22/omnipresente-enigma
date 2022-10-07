import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import SobreNosotros from '../../componentes/SobreNosotros/SobreNosotros';
import './PageNosotros.css';



function PageNosotros() {
  return (
    <div className="PageNosotros">
      <Header></Header>
      <SobreNosotros></SobreNosotros>
      <Footer></Footer>
    </div>
  );
}

export default PageNosotros;
