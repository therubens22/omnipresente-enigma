import React from 'react';
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';
import ListadoBlog from '../../componentes/ListadoBlog/ListadoBlog';
import ListadoTalleres from '../../componentes/ListadoTalleres/ListadoTalleres';
import ValoracionDelMes from '../../componentes/ValoracionDelMes/ValoracionDelMes';
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
          <ListadoTalleres sinImagen={true}></ListadoTalleres>
        </div>
      
      </div>
        <div className='abajo'>
          <ValoracionDelMes></ValoracionDelMes>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default Index;
