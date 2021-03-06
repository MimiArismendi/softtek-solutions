import React, {Component} from 'react';
import './index.css';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Footer from './contenedores/Footer.js';
import Vista from './contenedores/Vista.jsx';
import Nav from './contenedores/Navegador.js';
import Login from './contenedores/Login.jsx';
import TarjetaPublicacion from './contenedores/TarjetaPublicacion.jsx';
import Detalle from './contenedores/Detalle.js';




class App extends Component {
  render() {
    return (
        <div className=''>

          <Nav/>

            <ul>

                <li>
                <Link to="/">Login</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/vista">Topics</Link>
                </li>
                <li>
                 <Link to="/detalle">Detalle</Link>
                </li>
                <li>
                <Link to="/tarjetaPublicacion">Publicacion</Link>
                </li>

            </ul>

            <hr/>
        <Footer/>



            <Route exact path="/" component={Login}/>
            <Route path="/vista" component={Vista}/>
            <Route path="/tarjetaPublicacion" component={TarjetaPublicacion}/>
            <Route path="/detalle" component={Detalle}/>
        </div>
    );
  }
}

export default App;
