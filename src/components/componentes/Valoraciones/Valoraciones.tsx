import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Valoraciones.css';

type Props = {
    Curso: string,
    NombreUsuario: string,
    Valor: string

}

type State = {}

export default class Valoraciones extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const props = this.props;

        return (
             <main className='Valoraciones'>
                   
                   

                <div className="valoracion__contenido">
                    <h4 className="no-margin">{props.Curso}</h4>,
                    <p>Usuario: {props.NombreUsuario}</p>;
                    <p>Valoracion: {props.Valor}</p>
                    
                </div>
           
                
             </main>

        )
    }
}

