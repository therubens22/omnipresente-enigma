import React, { Component } from 'react'
import './Footer.css';
type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
  state = {}

  render() {
    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="barra">
                    <a className="logo" href="index.html">
                        <h1 className="logo__nombre no-margin centrar-texto">Blog <span className="logo__bold">De Cafe</span></h1>
                    </a>
                    <nav className="navegacion">
                        <a href="Nosotros.html" className="navegacion__enalce">Nosotros</a>
                        <a href="Cursos.html" className="navegacion__enalce">Cursos</a>
                        <a href="Contacto.html" className="navegacion__enalce">Contacto</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
  }
}