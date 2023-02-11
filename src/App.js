import React, {Component, Fragment} from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';

class App extends Component {
 
  render() { 
    return (
      <Fragment>
        <h1>Formulario de cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}
 

 
export default App;


