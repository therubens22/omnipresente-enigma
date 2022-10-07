import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import ListadoBlog from '../../componentes/ListadoBlog/ListadoBlog';
import Header from '../../componentes/Header/Header';

import './PageEntrada.css';



function PageEntrada() {
  return (
    <div className="PageEntrada">
      <Header></Header>
      <ListadoBlog></ListadoBlog>
      <Footer></Footer>
    </div>
  );
}

export default PageEntrada;
