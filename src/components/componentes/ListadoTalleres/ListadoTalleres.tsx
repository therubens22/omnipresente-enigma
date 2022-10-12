import React, { Component } from 'react'
import TalleresCursos from '../TalleresCursos/TalleresCursos';
import './ListadoTalleres.css';
type Props = {}

type State = {}

export default class ListadoTalleres extends Component<Props, State> {
  state = {}

  render() {
    return (
            <main className="contenedor">
                <h3 className="centrar-texto">Cursos y Talleres</h3>
                    <TalleresCursos
                    rutaImagen={require('./img/curso1.jpg')} 
                    titulo={'Tecnica de Extraccion de Cafe'}                 
                    precio={'20'} 
                    cupos={'30'}
                    descripcion={''}
                    ></TalleresCursos>

                    <TalleresCursos
                    rutaImagen={require('./img/curso2.jpg')}
                    titulo={'Taller para Tostar y Moler Granos'}                 
                    precio={'10'} 
                    cupos={'150'}
                    descripcion={'Nulla tristique faucibus facilisis. Vestibulum vestibulum libero a neque phdsahdjasdlasdhlasjhdlashdl'}
                    ></TalleresCursos>

                    <TalleresCursos
                    rutaImagen={require('./img/curso3.jpg')}
                    titulo={'4 Recetas de Cafe para Principiantes'}                 
                    precio={'50'} 
                    cupos={'20'}
                    descripcion={'Nulla tristique faucibus facilisis. Vestibulum vestibulum libero a neque phdsahdjasdlasdhlasjhdlashdl'}
                    ></TalleresCursos>

            </main>
    )
  }
}