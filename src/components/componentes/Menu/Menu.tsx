import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';
type Props = {}

type State = {}

export default class Menu extends Component<Props, State> {
    state = {}

    render() {
        return (
            <nav className='navegacion menu-navegacion'>
                <Link to="/contact" className="navegacion__enalce">Contacto</Link>
                <Link to="/nosotros" className="navegacion__enalce">Nosotros</Link>
                <Link to="/cursos" className="navegacion__enalce">Cursos</Link>
            </nav>
        )
    }
}