import React, { Component } from 'react';
export default class ListFields extends Component{
  render(){
    console.log(this.props.errors);
    return(
      <div className="form-group">
        <label> { this.props.fields[this.props.selectedfield].name } </label>
        <input { ...this.props } type="text" className="form-control" />
        {/* <button type="button" className="btn btn-primary btn-small" disabled = { this.props.errors.name || this.props.values == 0 ? true : false } >Next</button> */}
      </div> 
    )
  }
}