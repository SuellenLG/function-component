import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'

function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [CPF, setCPF] = useState("");


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome);
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome =event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substring(0, 3);
                    }
                    setNome(tmpNome);
                   
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
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                    if (nome.length > 3) {
                        setNome(nome.substring(0, 3));
                    }
                }}


                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" defaultChecked />}
            />
            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" defaultChecked />}
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

*/