import React, { Component } from 'react'
import './Contacto.css';
type Props = {}

type State = {}

export default class Contacto extends Component<Props, State> {
  state = {}

  render() {
    return (
        <main className="contenedor">
        <h3 className="centrar-texto">Contacto</h3> 
         
        <div className="contacto-br"> </div>
            
            <form className="formulario">
                <div className="campo">
                    <label className="campo__label">Nombre</label>
                    <input className="campo__field" type="text" placeholder="Tu Nombre" id="nombre"/>
                </div>
                <div className="campo">
                    <label className="campo__label">E-mail</label>
                    <input className="campo__field" type="email" placeholder="Tu E-mail" id="email"/>
                </div>
                <div className="campo">
                    <label className="campo__label">Mensaje</label>
                    <textarea className="campo__field campo__field--textarea" id="mensaje"></textarea>
                </div>

                <div className="campo">
                    <input type="sumit" value="Enviar" className="boton boton--primario"/>
                </div>

            </form>

        




    </main> 
    )
  }
}