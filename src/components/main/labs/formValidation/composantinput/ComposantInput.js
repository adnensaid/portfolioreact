import React, { Component } from 'react';

export default class ComposantInput extends Component{
  render(){
    return(
      ({field, form})=>(
        <div className="form-group">
          <label> { field.name } </label>
          <input { ...field } type="text" className="form-control" />
          <button
            type="button" 
            className="btn btn-primary btn-small" 
            disabled = { form.errors[field.name]  ||  !form.values[field.name] ? true : false } 
            onClick = { this.handleClick }
            >
              Next
          </button>
        </div>    
      )   
    )    
  }
}