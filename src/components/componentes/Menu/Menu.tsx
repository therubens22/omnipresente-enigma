import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';
type Props = {
    mostrarTop?: boolean,
    items: { url: string; etiqueta: string; }[]
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

                {this.props.items.map(enlace =>
                    <Link to={enlace.url} className="navegacion__enalce">{enlace.etiqueta}</Link>
                )}

                {this.props.mostrarTop === true &&
                    <Link to="/" className="navegacion__enalce">TOP</Link>
                }

            </nav>
        )
    }
}

