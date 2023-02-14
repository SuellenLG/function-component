import React from 'react'
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import Dadosusuario from './Dadosusuario';


function FormularioCadastro({ aoEnviar, validarCPF }) {

  return (
    <>
      <DadosPessoais aoEnviar = {aoEnviar} validarCPF = {validarCPF}/>
      <Dadosusuario />
      <DadosEntrega />
    </>


  );
}

export default FormularioCadastro;

