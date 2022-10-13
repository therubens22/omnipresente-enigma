import React, { Component } from 'react'
import TalleresCursos from '../TalleresCursos/TalleresCursos';
import './ListadoTalleres.css';
type Props = {
  sinImagen?: boolean
}

type State = {}

export default class ListadoTalleres extends Component<Props, State> {
  state = {}

  cursos = [
    {
      rutaImagen: this.props.sinImagen ? "" : require("./img/curso1.jpg"),
      titulo: "Tecnica de Extraccion de Cafe",
      descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala",
      precio: "30",
      cupos: "200"
    },
    {
      rutaImagen: this.props.sinImagen ? "" : require("./img/curso1.jpg"),
      titulo: "Tecnica de Extraccion de Cafe",
      descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala",
      precio: "30",
      cupos: "200"
    },
    {
      rutaImagen: this.props.sinImagen ? "" : require("./img/curso1.jpg"),
      titulo: "Tecnica de Extraccion de Cafe",
      descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala",
      precio: "30",
      cupos: "200"
    },
    {
      rutaImagen: this.props.sinImagen ? "" : require("./img/curso1.jpg"),
      titulo: "Tecnica de Extraccion de Cafe",
      descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala",
      precio: "30",
      cupos: "200"
    },
    {
      rutaImagen: this.props.sinImagen ? "" : require("./img/curso1.jpg"),
      titulo: "Tecnica de Extraccion de Cafe",
      descripcion: "lalalalalala lalalalalala lalalalalala lalalalalala lalalalalala",
      precio: "30",
      cupos: "200"
    }

  ];

  render() {
    return (
      <main className="contenedor">
        <h3 className="centrar-texto">Cursos y Talleres</h3>

        {this.cursos.map(curso =>
          <TalleresCursos
            rutaImagen={curso.rutaImagen}
            titulo={curso.titulo}
            precio={curso.precio}
            cupos={curso.cupos}
            descripcion={curso.descripcion}
          ></TalleresCursos>
        )}

      </main>
    )
  }
}