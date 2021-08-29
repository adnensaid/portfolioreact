import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './arrow.module.scss';
export default class Arrow extends Component{

  render(){
    return(
        <div className={ Style.icon+" "+this.props.classNameArrowRight[5] }>
          <NavLink
          className={ Style.iconDirection+" "+ Style.left }
          onClick={ this.props.startStopAnimationArrowLeft }
          to={ this.props.to } 
          >
            <div className={ Style.barBottom+" "+this.props.classNameArrowLeft[0] }></div>
            <div className={ Style.barTop+" "+this.props.classNameArrowLeft[1] }></div>
            <div className={ Style.iconDirectionTitre }>
              <p
              className={this.props.classNameArrowLeft[2]}
              onAnimationStart = { this.props.onAnimationStart }
              onAnimationEnd = { this.props.onAnimationEnd }
              >{ this.props.title}</p>
            </div>

          </NavLink>    
        </div>
    )
  }
}