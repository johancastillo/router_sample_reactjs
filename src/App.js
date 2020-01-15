import React, {Component} from 'react';
import './App.css';

//importan los componentes
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';



export default class App extends Component {
  render() {
    return (
      <div>
       
        <ul className="menu">
          <li><Link to="/" Home> Home </Link></li>
          <li><Link to="/pagina1" Pagina1> Pagina 1 </Link></li>
          <li><Link to="/pagina2" Pagina2> Pagina 2</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/pagina1" component={Page1}/>
        <Route path="/pagina2" component={Page2}/>

      </div>
    );
  }
}
