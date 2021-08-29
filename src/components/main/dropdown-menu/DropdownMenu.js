import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './dropdownmenu.module.scss';
export default class dropdownMenu extends Component{
  render(){
    return(

      <div className={ Style.dropdownMenu+' '+this.props.className[0] } >
        <ul className={ Style.dropdownMenuList } >
          <li onClick={ this.props.startStopAnimation }><NavLink to="/about">about</NavLink></li>
          <li onClick={ this.props.startStopAnimation }><NavLink to="/portfolio">portfolio</NavLink></li>
          <li onClick={ this.props.startStopAnimation }><NavLink to="/labs">labs</NavLink></li>
          <li onClick={ this.props.startStopAnimation }><NavLink to="/contact">contact</NavLink></li>
        </ul>
        <p>Copyright © 2021 - Adnen Said</p>
      </div> 
    )
  }
}