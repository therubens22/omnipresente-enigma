import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './TalleresCursos.css';
type Props = {
    rutaImagen: string
    titulo: string    
    precio: string
    cupos: string
    descripcion: string
}

type State = {}

export default class TalleresCursos extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <main className="contenedor">
                <h3 className="centrar-texto">Cursos y Talleres</h3>
                <div className="curso">

                     <div className="curso__imagen">                        
                        <img loading="lazy" src={this.props.rutaImagen} alt="curso.jpg" />
                     </div>

                    <div className="curso__informacion">
                        
                        <h4 className="no-margin">{this.props.titulo}</h4>
                        <p className="widget-curso__label">Precio:
    
                            <span className="widget-curso__info">{this.props.precio}</span>
                        </p>
                        <p className="widget-curso__label">Cupos:
                    
                        <span className="widget-curso__info">{this.props.cupos}</span>
                         </p>
                        <p className="curso__descripcion">{this.props.descripcion}</p>
                        
                        <a href="entrada.html" className="boton boton--secundario">Mas Informacion</a>

                    </div>
                </div>
            </main>
            
    
        )
    }
}

