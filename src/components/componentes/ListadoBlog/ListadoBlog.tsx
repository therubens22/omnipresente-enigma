import React, { Component } from 'react'
import ArticuloDeBlog from '../ArticuloDeBlog/ArticuloDeBlog';
import './ListadoBlog.css';

type Props = {}
type State = {}

export default class ListadoBlog extends Component<Props, State> {
    state = {}

    articulos = [
        {
            rutaImagen: require("./img/blog1.jpg"),
            titulo: "1",
            descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala "
        },
        {
            rutaImagen: require("./img/blog2.jpg"),
            titulo: "2",
            descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala "
        },
        {
            rutaImagen: require("./img/blog3.jpg"),
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