import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form, Text, NestedField } from 'react-form';

class Formarticles extends Component {
    render() {
        return (
            <div>
                <h1>Articles</h1>

                <h6>Articulo</h6>

                    <TextField
                        id="standard-name"
                        label="Titulo del articulo"
                        margin="normal"
                    />

                    <Grid/>

                    <TextField
                        id="standard-name"
                        label="Description"
                        margin="normal"
                    />

            </div>
        );
    }
}

export default Formarticles;