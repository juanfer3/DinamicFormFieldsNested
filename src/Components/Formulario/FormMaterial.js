import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form, Text, NestedField } from 'react-form';

/**Components */

/** Component Partials */
import Formarticles from './partials/FormArticles'


class FormMaterial extends Component {
   constructor(props) {
    super(props);
    this.state = { 
            post: [],
            articulos: [''],
            values: [''] 
        };
    //myForm



    //example    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

/** CreateArticle */


// addButton
addButton() {
    return this.setState(prevState => ({ articulos: {...prevState.articulos}}))
}

// handler model
handleChangeArticulos(i, event) {
     let articulos = [...this.state.articulos];
     articulos[i] = event.target.value;
  }




/** Example*/ 
  createUI(){
 
     return this.state.values.map((el, i) => 
         <div key={i}>
    	    <TextField type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
    	    <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
         </div>          
     )
  }

  handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = event.target.value;
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
  }

    render() {

        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>


                    <TextField
                        id="standard-name"
                        label="Name"
                        name="nombre"
                        margin="normal"
                    />


                    <Grid/>

                    <Button variant="contained" color="primary"
                    onClick={this.addButton.bind(this)} >
                        AddArticles
                    </Button>

                    <Grid/>

                  


                    
                    

                </form>
            </div>
        );
    }
}

export default FormMaterial;
