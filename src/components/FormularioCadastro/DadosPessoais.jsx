import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'

function DadosPessoais({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}

                id="nome"
                label="Nome"
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
                onBlur={(event) =>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                }}
                
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
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
                Cadastrar
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