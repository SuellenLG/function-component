import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'

function FormularioCadastro({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
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

export default FormularioCadastro;

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