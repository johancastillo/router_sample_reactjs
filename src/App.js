import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//importan los componentes
import {Link, Route, Switch} from 'react-router-dom';

const HomeComp = () => {
  return (
    <div className="pagina home">
      <h1> Acá va el Home</h1>
    </div>
  )
};

const Pagina1Comp = () => {
  return (
    <div className="pagina pagina1">
      <h1> Pagina 1</h1>
    </div>
  )
};


const Pagina2Comp = () => {
  return (
    <div className="pagina pagina2">
      <h1> Acá va la Pagina 2</h1>
    </div>
  )
};


class App extends Component {
  render() {
    return (
      <div>
        {/*
        Esto se debe visualizar en todas las páginas dado que no
        está dentro de un componente Route
        los enlaces deben ir dentro de un componente Link
        */}
        <ul className="menu">
          <li><Link to="/home" Home> Home </Link></li>
          <li><Link to="/pagina1" Pagina1> Pagina 1 </Link></li>
          <li><Link to="/pagina2" Pagina2> Pagina 2</Link></li>
        </ul>

        {/* Acá se va a renderizar solo uno de estos componentes,basado
        en la ruta que tenga la página actual
        ej:  si la ruta es /home ni Pagina1Comp ni Pagina2Comp se van a ver*/}

        <Route path="/home" component={HomeComp}/>
        <Route path="/pagina1" component={Pagina1Comp}/>
        <Route path="/pagina2" component={Pagina2Comp}/>

      </div>
    );
  }
}

export default App;
