import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import ListadoTalleres from '../../componentes/ListadoTalleres/ListadoTalleres';
import './PageCursos.css';



function PageCursos() {
  return (
    <div className="PageCursos">
      <Header></Header>
      <ListadoTalleres></ListadoTalleres>
      <Footer></Footer>
    </div>
  );
}

export default PageCursos;
