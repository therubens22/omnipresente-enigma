import React, { Component } from 'react'
import './.css';
type Props = {}

type State = {}

export default class ListadoTalleres extends Component<Props, State> {
  state = {}

  render() {
    return (
        <aside className="sidebar">
        <h3>Nuestros Cursos y Talleres</h3>
        <ul className="cursos no-padding">
            <li className="widget-curso">
                <h4 className="no-margin"> Tecnica de extraccion de Cafe</h4>
                <p className="widget-curso__label">Precio:

                    <span className="widget-curso__info">Gratis</span>
                </p>
                <p className="widget-curso__label">Cupos:
                    
                    <span className="widget-curso__info">20</span>
                </p>
                <a href="entrada.html" className="boton boton--secundario">Mas Informacion</a>

            </li>

            <li className="widget-curso">
                <h4 className="no-margin">4 Recetas de Cafe para Principiantes</h4>
                <p className="widget-curso__label">Precio:

                    <span className="widget-curso__info">Gratis</span>
                </p>
                <p className="widget-curso__label">Cupos:
                    
                    <span className="widget-curso__info">20</span>
                </p>
                <a href="entrada.html" className="boton boton--secundario">Mas Informacion</a>

            </li>

        </ul>

    </aside>
    )
  }
}