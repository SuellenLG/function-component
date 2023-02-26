import React, { useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'
import validacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from "../../Hooks/useErros";



function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(validacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                label="Nome"
                name="nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}

                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}

                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                    />}
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }}
                        name="novidades"
                    />}
            />

            <Button variant="contained" type="submit">
                Próximo
            </Button>

        </form>
    );
}

export default DadosPessoais;

/*
const [sobrenome,setSobrenome] = useState(""); ==
    const arr = useState("");
    const sobrenome = arr[0];
    const setSobrenome = arr[1];

validade nome ==
value={nome}
                onChange={(event) => {
                    let tmpNome =event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substring(0, 3);
                    }
                    setNome(tmpNome);
*/