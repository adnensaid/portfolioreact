import React, { Component } from 'react';
import Style from './header.module.scss';
import profil from '../../assets/images/eden/logo3.png';
import { NavLink } from 'react-router-dom';

const ListItemLink = ({ to, name, ...rest}) => (
  <li className={ Style.navItem+" nav-item shadow-none" }>
    <NavLink
    to={to}
    {...rest}
    activeClassName="active"
    className={ Style.navLink+" nav-link" }
    >
      {name}
    </NavLink>    
  </li>
)
export default class Header extends Component{
  render(){
    return(
      <nav className={Style.navBar+" navbar navbar-expand-lg navbar-light fixed-top" } id="navbar">
        <div className="container">
          <span className={ Style.logo+" navbar-brand d-flex flex-column align-items-center" } >
            <img src={ profil } className={ Style.logo } alt="profil" />
          </span>
          <button 
          className={ Style.navbarToggler+" navbar-toggler" } 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          >
            <span className={ Style.navbarTogglerIcon }></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex ms-auto" id="navbar-nav">
              <ListItemLink to="/home" name="HOME" />
              <ListItemLink to="/portfolio" name="PORTFOLIO" />
              <ListItemLink to="/labs" name="LABS" />
              <ListItemLink to="/contact" name="CONTACT" />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}