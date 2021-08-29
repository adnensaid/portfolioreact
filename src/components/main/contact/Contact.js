import React, { Component } from 'react';
import Style from './contact.module.scss';
export default class Contact extends Component{
  render(){
    return(
      <div className={ Style.contact }>
        <div className={ Style.contactContent }> 
          <div className={ Style.contactText }>
            <h1>Entrez en contact</h1>
            <p>
            Si vous voulez me contacter, parlez d'une collaboration
            sur un projet ou pour dire simplement bonjour,
            remplissez le formulaire ci-dessous ou envoyez un e-mail à   
            </p>
            <h3 className="text-hint">adnensaid83@gmail.com</h3>    
          </div>
          <div className={ Style.talk}>
            <form>
              <input type='text' placeholder="Entrez votre nom" /><br />
              <button className={ Style.btn }>NEXT</button>
              <button type="submit" className={ Style.btn } >ENVOYEZ MESSAGE</button>
            </form>
            <div className={ Style.socials }>
              <h2>Socials Medias</h2>
              <p className={ Style.textSocials }>Suivez mes profils sur Twitter, GitHub et Linkedin</p>
              <ul>
                <li><a href="https://www.facebook.com/adnenso/">FACEBOOK</a></li>
                <li><a href="https://www.linkedin.com/in/adnensaid83/">LINKEDIN</a></li>
                <li><a href="https://github.com/adnensaid">TWITTER</a></li>
                <li><a href="https://github.com/adnensaid">GITHUB</a></li>
              </ul>
            </div>      
          </div>   
        </div>
      </div>
    )    
  }
}