import React, { Component } from 'react';
export default class MenuCardElement extends Component{
  selectCard = () => {
    this.props.updateSelectedPhoto();
  }
  render(){
    return(
      <li onClick={ this.selectCard }>
        <div>{ this.props.title }</div>
      </li>     
    )
  }
}