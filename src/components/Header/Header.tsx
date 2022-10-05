import React, { Component } from 'react'
import './Header.css';
type Props = {}

type State = {}

export default class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
        <header className="header">
        <div className="contenedor">
            <div className="barra">
                <a className="logo" href="index.html">
                    <h1 className="logo__nombre no-margin centrar-texto">Blog <span className="logo__bold">De Cafe batata papita</span></h1>
                </a>
                <nav className="navegacion">
                    <a href="Nosotros.html" className="navegacion__enalce">Nosotros</a>
                    <a href="Cursos.html" className="navegacion__enalce">Cursos</a>
                    <a href="Contacto.html" className="navegacion__enalce">Contacto</a>
                </nav>
            </div>

        </div>


        <div className="header__texto">
            <h2 className="no-margin">Blog de Cafe con Consejo y Cursos.</h2>
            <p className="no margin">Aprende de los Expertos las mejores recetas y consejos</p>

        </div>


    </header>     
    )
  }
}