import React, { Component } from 'react'
import ArticuloDeBlog from '../ArticuloDeBlog/ArticuloDeBlog';
import './ListadoBlog.css';
import fafaf from "../ListadoBlog/img/blog1.jpg";

type Props = {}
type State = {}

export default class ListadoBlog extends Component<Props, State> {
    state = {}

    articulos = [
        {
            rutaImagen: fafaf,
            titulo: "1",
            descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala "
        },
        {
            rutaImagen: "img/blog2.jpg",
            titulo: "2",
            descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala "
        },
        {
            rutaImagen: "img/blog1.jpg",
            titulo: "asass",
            descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala "
        },
        {
            rutaImagen: "img/blog1.jpg",
            titulo: "asass",
            descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala "
        }
    ];



    render() {
        return (

            <main className='Blog'>
                <h3>Nuestro Blog</h3>


                {this.articulos.map(art =>
                    <ArticuloDeBlog
                        rutaImagen={art.rutaImagen}
                        titulo={art.titulo}
                        descripcion={art.descripcion}
                    ></ArticuloDeBlog>
                )}



            </main>

        )
    }
}