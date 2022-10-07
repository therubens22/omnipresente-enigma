import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import ListadoBlog from '../../componentes/ListadoBlog/ListadoBlog';
import ListadoTalleres from '../../componentes/ListadoTalleres/ListadoTalleres';
import './Index.css';



function Index() {
  return (
    <div className="Index">
      <Header></Header>

      <div className="contenido">
        
        <div className='izquierda'>
          <ListadoBlog></ListadoBlog>
        </div>

        <div className='derecha'>
          <ListadoTalleres></ListadoTalleres>
        </div>
      
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Index;
