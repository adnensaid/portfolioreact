import React, { Component } from 'react';
import Style from './header.module.scss';
import profil from '../../assets/images/eden/logo3.png';
import { NavLink } from 'react-router-dom';

const ListItemLink = ({ to, name, ...rest}) => {
  const color = rest.path === "/home" ? 'text-light' : 'text-dark';
  const activeClassName = rest.path === "/home" ? 'active' : 'active1';
  return(
    <li className={ Style.navItem+" nav-item shadow-none" }>
      <NavLink
      to={to}
      {...rest}
      activeClassName={activeClassName}
      className={ Style.navLink+" nav-link "+color }
      >
        {name}
      </NavLink>    
    </li>
  )
}
export default class Header extends Component{ 
  render(){
    let bgColor = this.props.history.location.pathname === '/home' ? '' : 'bg-light';
    return(
      <nav className={Style.navBar+" navbar navbar-expand-lg navbar-light fixed-top "+bgColor } id="navbar">
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
              <ListItemLink to="/home" name="HOME" path =  { this.props.history.location.pathname } />
              <ListItemLink to="/portfolio" name="PORTFOLIO" path =  { this.props.history.location.pathname } />
              <ListItemLink to="/labs" name="LABS" path =  { this.props.history.location.pathname } />
              <ListItemLink to="/contact" name="CONTACT" path =  { this.props.history.location.pathname } />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}