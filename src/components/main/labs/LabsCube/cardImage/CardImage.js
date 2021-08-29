import React, { Component } from 'react';
import Style from './cardImage.module.scss';
export default class CardImage extends Component{
  render(){
    return(
      <div
      className={ Style.cardTop }
      style={{
        transition:'all ease 1s',
        transform:'rotateY(' + this.props.value + 'deg)',
      }}
      >
        <div className={ Style.cardTopImgList }>
          <div className={ Style.cardImg }>
            <img src={ this.props.images[0] } alt="img" />
          </div>
          <div className={ Style.cardImg }>
            <img src={ this.props.images[1] } alt="img" />
          </div>  
          <div className={ Style.cardImg }>
            <img src={ this.props.images[2] } alt="img" />
          </div> 
          <div className={ Style.cardImg }>
            <img src={ this.props.images[3] } alt="img" />
          </div>  
          <div className={ Style.cardImg }>
            <img src={ this.props.images[2] } alt="img" />
          </div>      
          <div className={ Style.cardImg }>
            <img src={ this.props.images[3] } alt="img" />
          </div>   
        </div> 
      </div>
    )
  }
}