import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ArticuloDeBlog.css';
type Props = {
    rutaImagen: string
    titulo: string
    descripcion: string
}

type State = {}

export default class ArticuloDeBlog extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <article className='Entrada'>
                <div className="entrada__imagen">
                    <picture>

                        <img loading="lazy" src={this.props.rutaImagen} alt="imagen blog"></img>
                    </picture>

                </div>
                <div className="entrada__contenido">
                    <h4 className="no-margin">{this.props.titulo}</h4>
                    <p>{this.props.descripcion}</p>
                    <a href="entrada.html" className="boton boton--primario">Leer mas</a>
                </div>
            </article>
        )
    }
}

