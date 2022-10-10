import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
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

                        <Link to="/" className="logo">
                            <h1 className="logo__nombre no-margin centrar-texto">Blog <span className="logo__bold">De Cafe batata papita</span></h1>
                        </Link>

                      <Menu></Menu>
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