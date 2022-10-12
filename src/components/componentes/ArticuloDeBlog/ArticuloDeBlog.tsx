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
        const props = this.props;

        return (
            <article className='Entrada'>
                <div className="entrada__imagen">
                    {props.rutaImagen}
                    <img src={props.rutaImagen} alt="imagen blog"></img>
                </div>

                <div className="entrada__contenido">
                    <h4 className="no-margin">{props.titulo}</h4>
                    <p>{props.descripcion}</p>
                    <a href="entrada.html" className="boton boton--primario">Leer mas</a>
                </div>
            </article>
        )
    }
}

