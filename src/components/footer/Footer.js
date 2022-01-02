import React from 'react';
import Style from './footer.module.scss';
import logo from "../../assets/images/eden/logo3.png";
const Footer = ()=>{
  return(
    <footer className={ Style.footer }>
      <div className="container">
        <h2 className={ Style.logo }><img src={ logo } alt="photo" /></h2>
        <p>
        Envie d'entrer en contact ou de parler d'un projet ?
        N'hésitez pas à me contacter par mail à
        </p>
        <p className={ Style.mail }>adnensaid83@gmail.com</p>
        <ul className={ Style.SocialsList }>
          <li><a href="https://github.com/adnensaid"><i className="fab fa-github-alt"></i></a></li>
          <li><a href="https://www.linkedin.com/in/adnensaid83/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.facebook.com/adnenso/"><i className="fab fa-facebook-f"></i></a></li>
        </ul>
        <p>Copyright © 2021 Said Adnen</p>
      </div>
    </footer>
  )
}
export default Footer;