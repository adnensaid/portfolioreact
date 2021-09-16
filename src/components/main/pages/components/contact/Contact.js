import React, { Component } from 'react';
import Style from './contact.module.scss';
import { Button, Container, Form } from 'react-bootstrap';
import fcb from '../../../../../assets/images/socials/facebook.svg';
import linkedin from '../../../../../assets/images/socials/linkedin.svg';
import git from '../../../../../assets/images/socials/github.svg';
export default class Contact extends Component{
  render(){
    return(
      <div className={ Style.contact+" flex-fill d-flex flex-column" }>
        <div className={ Style.contactText+ " flex-fill" }>
          <h1>Entrez en contact</h1>
          <p>
          Si vous voulez me contacter, parlez d'une collaboration
          sur un projet ou pour dire simplement bonjour,
          remplissez le formulaire ci-dessous ou envoyez un e-mail à   
          </p>
          <h3 className="text-hint">adnensaid83@gmail.com</h3>         
        </div>
        <div className={ Style.talk+" flex-fill"}>
          <div className={ Style.talkContent }>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez votre nom" />
              </Form.Group>
              <Button variant="secondary" className={ Style.btn }>NEXT</Button>
              <Button variant="success" type="submit" className={ Style.btn } >ENVOYEZ MESSAGE</Button>
            </Form>    
            <div className={ Style.socials }>
              <h2>Socials Medias</h2>
              <p>Suivez mes profils sur Twitter, GitHub et Linkedin</p>
              <div className={ Style.containerSocials }>
                <div className={ Style.socialsList+" d-flex justify-content-between mt-4" }>
                   <a className={ Style.elem+" d-flex align-items-center justify-content-center " } href="https://www.facebook.com/adnenso/"><img src={ fcb } /> </a>
                   <a className={ Style.elem+" d-flex align-items-center justify-content-center " } href="https://www.linkedin.com/in/adnensaid83/"><img src={ linkedin } /> </a>
                   <a className={ Style.elem+" d-flex align-items-center justify-content-center " } href="https://github.com/adnensaid"><img src={ git } /></a>
                </div>
              </div>     
            </div>      
          </div>  
        </div>   
      </div>
    )    
  }
}