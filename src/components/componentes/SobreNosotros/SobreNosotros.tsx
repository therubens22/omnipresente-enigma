import React, { Component } from 'react'
import './SobreNosotros.css';
type Props = {}

type State = {}

export default class SobreNosotros extends Component<Props, State> {
  state = {}

  render() {
    return (
        <main className="contenedor">
        <h3 className="centrar-texto">Sobre Nosotros</h3>

        <div className="sobre-nosotros">
            <div className="sobre-nosotros__img">
                <img src={require('./img/nosotros.jpg')} alt="aca esta la img" />

            </div>

            <div className="sobre-nosotros__texto">
                <p>Nulla tristique faucibus facilisis. Vestibulum vestibulum libero a neque porta 
                    vulputate. Etiam pharetra dolor eu nibh vestibulum ornare. Donec tempus ullamcorper
                    aliquet. Curabitur et risus ipsum. Nullam sit amet mattis mauris. Morbi ultricies 
                    lacinia tempor. Proin eleifend tellus bibendum lorem iaculis, tristique tempus nisi 
                    efficitur. Vestibulum facilisis lacinia libero, vel luctus velit.</p>
                <p>Nulla tristique faucibus facilisis. Vestibulum vestibulum libero a neque porta 
                    vulputate. Etiam pharetra dolor eu nibh vestibulum ornare. Donec tempus ullamcorper 
                    aliquet. </p>    
            </div>

        </div>
    </main> 
    )
  }
}