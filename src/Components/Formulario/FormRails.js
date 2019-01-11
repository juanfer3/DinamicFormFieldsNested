import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form, Text, NestedField } from 'react-form';


/**Models */
import Evento from '../../Models/Evento';

class Formrails extends Component {
    constructor(props) {
        super(props);
        this.emptyTask = {
            title: '',
            id: null,
            errors: {},
            _destroy: false
        };

        this.state = {
            project: {
            name: '',
            errors: {},
            tasks_attributes: [Object.assign({}, this.emptyTask)]
            }
        };

        this.onTaskTitleChange = this.onTaskTitleChange.bind(this)
        this.handleRemoveTask = this.handleRemoveTask.bind(this)
        this.handleProjectNameChange = this.handleProjectNameChange.bind(this)

    }


    //Handler Event
    onTaskTitleChange(event, task) {
    task.title = event.target.value;
    this.setState({ project: this.state.project });
    }

    handleRemoveTask(task) {
        task._destroy = true;
        this.setState({ project: this.state.project });
    }

    handleProjectNameChange(e) {
        let project = this.state.project;
        project.name = e.target.value;
        this.setState({ project: this.state.project });
    }

    // PushTask
    handleAddTask() {
        this
        .state
        .project
        .tasks_attributes
        .push(Object.assign({}, this.emptyTask));

        this.setState({ project: this.state.project });
    }

    // Submit
    handleFormSubmit() {
        console.log(this.state.project)
    }
    


    //Form Tasks
    renderTasksForm() {
    let counter = 0;
    return this.state.project.tasks_attributes.map((task, index) => {
      if (task._destroy === false) {
        let taskDOM = (
          <div className="task-form" key={index}>
            <div className="form-group">

              <TextField
                id="standard-name"
                label="Title"
                onChange={event => this.onTaskTitleChange(event, task)}
                margin="normal"
                />


              <Button 
              onClick={e => this.handleRemoveTask(task)}
              variant="contained" 
              color="primary">
                Hello World
              </Button>
  
            </div>
          </div>
        );
        counter++;

        return taskDOM;
      } else {
        return null;
      }
    });
  }


    render() {
        return (
            <div className="ProjectForm">
                <form>
                    <div className="form-group">
                  
                    <TextField
                        type="text"
                        label="Nombre Post"
                        onChange={e => this.handleProjectNameChange(e)}
                        value={this.state.project.name}
                    />
             
                    </div>
                    <hr />
                    <div >
                        <h3>Tasks</h3>
                        {this.renderTasksForm()}
                        
                        <Button variant="contained" color="primary"
                            onClick={e => this.handleAddTask()}
                            >
                            + Add Task
                        </Button>
                    </div>
                    <br />
                    <Button


       
                    onClick={()=>this.handleFormSubmit()}
                    
                    className="btn btn-primary">
                    Save
                    </Button>
                    
                   





                </form>
            </div>
        );
    }
}

export default Formrails;