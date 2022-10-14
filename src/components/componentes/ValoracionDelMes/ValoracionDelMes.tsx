import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Valoraciones from '../Valoraciones/Valoraciones';
import './ValoracionDelMes.css';
type Props = {}

type State = {}

export default class ValoracionDelMes extends Component<Props, State> {
    state = {}

    InformacionExtra = [
        {
            Curso: "Tecnica de Extraccion de Cafe Premium",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe1",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe2",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe3",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe4",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe5",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe6",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe7",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe8",
            NombreUsuario: "CapyMarce",
            Valor:4
        },
        {
            Curso: "Tecnica de Extraccion de Cafe9",
            NombreUsuario: "CapyMarce",
            Valor:1
        },
    ];

    render() {
        return (
            <main className='Valoracion'>
                 <h3 className='titulo'>Valoraciones del Mes</h3>

                   {this.InformacionExtra.map(infoValoracion =>
                    <Valoraciones
                        Curso={infoValoracion.Curso}
                        NombreUsuario={infoValoracion.NombreUsuario}
                        Valor={infoValoracion.Valor}
                    ></Valoraciones>
                )}


            



            </main>
        )
    }
}