import React from 'react';
import Style from './footer.module.scss';
const Footer = ()=>{
  return(
    <footer className={ Style.footer }>
      <p>
      Envie d'entrer en contact ou de parler d'un projet ? <br />
      N'hésitez pas à me contacter par mail à <br />
      <strong>adnensaid83@gmail.com</strong> <br />
      ou déposez une ligne dans le formulaire à la
      <strong> page de contact</strong>    
      </p>
    </footer>
  )
}
export default Footer;