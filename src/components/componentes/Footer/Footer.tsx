import React, { Component } from 'react'
import Menu from '../Menu/Menu';
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

                        <Menu></Menu>

                    </div>
                </div>
            </footer>
        )
    }
}