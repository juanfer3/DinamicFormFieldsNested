import React, { Component } from 'react';
import { Form, Text, NestedField } from 'react-form';

const QuestionFields = () => (
    <div>
      <label htmlFor="color">Whats your favorite color?</label>
      <Text field="color" id="color" />
      <label htmlFor="food">Whats your favorite food?</label>
      <Text field="food" id="food" />
      <label htmlFor="car">Whats type of car do you drive?</label>
      <Text field="car" id="car" />
    </div>
  )

class Myform extends Component {
  constructor( props ) {
      super( props );
      this.state = {formApi: [] };
      this.showData = this.showData.bind(this);
    }

    showData() {
      console.log(this.state.formApi.values);
    }

    render() {
        return (
            <div>
                <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>
                <button
                  onClick={() => formApi.addValue('siblings', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add Sibling</button>
                <form onSubmit={formApi.submitForm} id="dynamic-form">
                  <label htmlFor="dynamic-first">First name</label>
                  <Text field="firstName" id="dynamic-first" />
                  { formApi.values.siblings && formApi.values.siblings.map( ( sibling, i ) => (
                    <div key={`sibling${i}`}>
                      <label htmlFor={`sibling-name-${i}`}>Name</label>
                      <Text field={['siblings', i]} id={`sibling-name-${i}`} />
                      <button
                        onClick={() => formApi.removeValue('siblings', i)}
                        type="button"
                        className="mb-4 btn btn-danger">Remove</button>
                    </div>
                  ))}
                  <button type="submit" onClick={()=>this.showData()} className="mb-4 btn btn-primary">Submit</button>
                </form>
              </div>
            )}
          </Form>


            <h6> {this.state.formApi.value} </h6>

            </div>
        );
    }
}

export default Myform;