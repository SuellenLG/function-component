import { TextField, Button } from "@mui/material";
import React from "react";

function DadosEntrega() {
    return (
        < form >
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"

            />
            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="numero"
                label="numero"
                type="number"
                variant="outlined"
                margin="normal"

            />
            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"

            />
            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"

            />

            <Button variant="contained" type="submit" fullWidth>
                Finalizar cadastro
                
            </Button>
        </form >
    )


}

export default DadosEntrega;