import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './arrow.module.scss';
export default class Arrow extends Component{
  onClick = (e)=>{
    e.preventDefault();
    this.props.startStopAnimationArrowRight(this.props.to)
  }
  render(){
    return(
        <div        
        className={ ` ${Style.icon} ${ this.props.classNameArrowLeft ? this.props.classNameArrowLeft[4] : '' }`}
        >
          <NavLink
          className={ Style.iconDirection }
          onClick={  this.onClick }
          to={ this.props.to } 
          >
            <div className={ ` ${ Style.barBottom } ${ this.props.classNameArrowRight ? this.props.classNameArrowRight[0] : '' } `}
            >
            </div>
            <div className={ ` ${ Style.barTop } ${ this.props.classNameArrowRight ? this.props.classNameArrowRight[1] : '' } `}>
            </div>
            <div className={ Style.iconDirectionTitre }>
            <p
            className={ ` ${ this.props.classNameArrowRight ? this.props.classNameArrowRight[2] : '' } `}
            >{ this.props.title}</p>
            </div>

          </NavLink>    
        </div>
    )
  }
}