import React, { Component } from 'react'
import ArticuloDeBlog from '../ArticuloDeBlog/ArticuloDeBlog';
import './ListadoBlog.css';
type Props = {}

type State = {}

export default class ListadoBlog extends Component<Props, State> {
    state = {}

    render() {
        return (

            <main className='Blog'>
                <h3>Nuestro Blog</h3>

                <ArticuloDeBlog
                    rutaImagen={'img/blog1.jpg'}
                    titulo={'Tipos de Grano de Cafe'}
                    descripcion={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
                ></ArticuloDeBlog>


                <ArticuloDeBlog
                    rutaImagen={'img/blog1.jpg'}
                    titulo={'saracatunga siglo 22'}
                    descripcion={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
                ></ArticuloDeBlog>


                <ArticuloDeBlog
                    rutaImagen={'img/blog1.jpg'}
                    titulo={'Pipiolo'}
                    descripcion={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
                ></ArticuloDeBlog>


            </main>

        )
    }
}