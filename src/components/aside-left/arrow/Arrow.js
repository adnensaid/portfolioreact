import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './arrow.module.scss';
export default class Arrow extends Component{
  onClick = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    this.props.startStopAnimationArrowLeft(this.props.to)
  }
  render(){
    return(
        <div 
        className={ ` ${ Style.icon } 
        ${ this.props.classNameArrowRight ? this.props.classNameArrowRight[4] : '' } 

        `}
        >
          <NavLink
          className={ Style.iconDirection }
          onClick={ e=>this.props.startStopAnimationArrowLeft(this.props.to, e) }
          to={ this.props.to } 
          >
            <div className={ ` ${ Style.barBottom } ${ this.props.classNameArrowLeft ? this.props.classNameArrowLeft[0] : '' } ` }></div>
            <div className={ ` ${ Style.barTop } ${ this.props.classNameArrowLeft ? this.props.classNameArrowLeft[1] : '' } ` }></div>
            <div className={ Style.iconDirectionTitre }>
              <p
              className={` ${ this.props.classNameArrowLeft ? this.props.classNameArrowLeft[2] : '' } `}
              >{ this.props.title}</p>
            </div>

          </NavLink>    
        </div>
    )
  }
}