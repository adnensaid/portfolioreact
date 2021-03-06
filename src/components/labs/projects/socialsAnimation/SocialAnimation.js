import React,{ Component } from 'react';
import Style from './socialanimation.module.scss';
import fcbImg from '../../../../../../assets/images/socials/facebook.svg';
import instagramImg from '../../../../../../assets/images/socials/github.svg';
export default class SocialAnimation extends Component{
  render(){
    return(
      <div className={ Style.containerSocials }>
        <div className={ Style.socials }>
          <div className={ Style.socialsElem }>
            <div className={ Style.queu }></div>
            <div className={ Style.SocialsElemImg }>
              <img src={ fcbImg } alt="img" />
            </div>
          </div>
          <div className={ Style.socialsElem }>
            <div className={ Style.queu }></div>
            <div className={ Style.SocialsElemImg }>
              <img src={ instagramImg } alt="img" />
            </div>
          </div>
        </div> 
      </div>
    )
  }
}