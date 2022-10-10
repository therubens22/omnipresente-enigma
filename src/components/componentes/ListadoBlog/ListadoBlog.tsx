import React, { Component } from 'react'
import './ListadoBlog.css';
type Props = {}

type State = {}

export default class ListadoBlog extends Component<Props, State> {
    state = {}

    render() {
        return (

            <main className='Blog'>
                <h3>Nuestro Blog</h3>

                <article className='Entrada'>
                    <div className="entrada__imagen">
                        <picture>

                            <img loading="lazy" src="img/blog1.jpg" alt="imagen blog"></img>
                        </picture>

                    </div>
                    <div className="entrada__contenido">
                        <h4 className="no-margin">Tipos de Grano de Cafe</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Repellendus, velit minus molestiae sapiente, numquam alias aliquid
                            consequuntur, consequatur eveniet qui necessitatibus ipsa quibusdam
                            tempora porro cupiditate quasi architecto. Aut, repudiandae.</p>
                        <a href="entrada.html" className="boton boton--primario">Leer Entradas</a>
                    </div>
                </article>

                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>

                            <img loading="lazy" src="img/blog2.jpg" alt="imagen blog"></img>
                        </picture>
                    </div>

                    <div className="entrada__contenido">
                        <h4 className="no-margin">Deliciosas Recetas de Cafe</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Repellendus, velit minus molestiae sapiente, numquam alias aliquid
                            consequuntur, consequatur eveniet qui necessitatibus ipsa quibusdam
                            tempora porro cupiditate quasi architecto. Aut, repudiandae.</p>
                        <a href="entrada.html" className="boton boton--primario">Leer Entradas</a>
                    </div>

                </article>

                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>

                            <img loading="lazy" src="blogdecafe_inicio/img/blog3.jpg" alt="imagen blog"></img>
                        </picture>
                    </div>

                    <div className="entrada__contenido">
                        <h4 className="no-margin">Beneficio del Cafe</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Repellendus, velit minus molestiae sapiente, numquam alias aliquid
                            consequuntur, consequatur eveniet qui necessitatibus ipsa quibusdam
                            tempora porro cupiditate quasi architecto. Aut, repudiandae.</p>
                        <a href="entrada.html" className="boton boton--primario">Leer Entradas</a>
                    </div>
                </article>

            </main>

        )
    }
}