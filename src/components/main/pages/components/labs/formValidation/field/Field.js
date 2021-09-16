import React, { Component } from 'react';

export default class Field extends Component{
  render(){
    return(
      <div className="form-group">
        <label> { this.props.name } </label>
        <input { ...this.props } type="text" className="form-control" />
        <button type="button" className="btn btn-primary btn-small" disabled = { this.props.errors.name || this.props.value.length == 0 ? true : false } >Next</button>
      </div>    
    )
  }
}