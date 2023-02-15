import React, { useState } from 'react'
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import Dadosusuario from './Dadosusuario';
import { Typography } from '@mui/material';

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <Dadosusuario aoEnviar={proximo}/>
      case 1:
        return < DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar}/>
      default:
        return <Typography>Erro</Typography>
    }
  }

  return (
    <>
      {formularioAtual(etapaAtual)}


    </>


  );
}


export default FormularioCadastro;

/*
<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
<Dadosusuario />
<DadosEntrega />

*/