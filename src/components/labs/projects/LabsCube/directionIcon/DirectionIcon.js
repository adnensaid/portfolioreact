import React, { Component } from 'react';
import Style from './DirectionIcon.module.scss';
export default class DirectionIcon extends Component{
  render(){
    return(
      <div className={ Style.directionSlide }>
        <i onClick={ ()=>this.props.callback(90) } className={ Style.iconDirection }>
          <i className={ Style.icon }></i>
        </i>
        <i onClick={ ()=>this.props.callback(-90) } className={ Style.iconDirection }>
          <i className={ Style.icon }></i>
        </i>
      </div>
    )
  }
}