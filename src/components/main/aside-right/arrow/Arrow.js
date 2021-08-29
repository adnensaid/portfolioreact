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
        <div className={ Style.icon+" "+this.props.classNameArrowLeft[5]}>
          <NavLink
          className={ Style.iconDirection+" "+ Style.right }
          onClick={ this.onClick }
          to={ this.props.to } 
          >
            <div className={ Style.barBottom+" "+this.props.classNameArrowRight[0]}>
            </div>
            <div className={ Style.barTop +" "+this.props.classNameArrowRight[1]}>
            </div>
            <div className={ Style.iconDirectionTitre }>
            <p
            className={this.props.classNameArrowRight[2]}
            onAnimationStart = { this.props.onAnimationStart }
            onAnimationEnd = { this.props.onAnimationEnd }

            >{ this.props.title}</p>
            </div>

          </NavLink>    
        </div>
    )
  }
}