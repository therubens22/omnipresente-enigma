import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';
type Props = {
    mostrarTop?: boolean
}

type State = {}

export default class Menu extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <nav className='navegacion menu-navegacion'>
                <Link to="/contact" className="navegacion__enalce">Contacto</Link>
                <Link to="/nosotros" className="navegacion__enalce">Nosotros</Link>
                <Link to="/cursos" className="navegacion__enalce">Cursos</Link>
                <Link to="/" className="navegacion__enalce">Quienes somos</Link>

                {this.props.mostrarTop === true &&
                    <Link to="/" className="navegacion__enalce">TOP</Link>
                }
            </nav>
        )
    }
}

