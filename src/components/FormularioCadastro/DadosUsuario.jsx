import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import validacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../Hooks/useErros";


function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(validacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha })
            }
        }}>

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}

                id="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button variant="contained" type="submit">
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario;