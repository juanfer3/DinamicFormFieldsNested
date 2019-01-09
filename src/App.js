import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Myform from './Components/Formulario/form';
import  Navbar  from './Components/Navbar/Navbar';
import FormMaterial from './Components/Formulario/FormMaterial';
import Formrails from './Components/Formulario/FormRails';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="App">
          <Formrails/>
        </div>
      </div>
    );
  }
}

export default App;
