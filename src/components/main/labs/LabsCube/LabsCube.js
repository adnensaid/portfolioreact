import React, { Component } from 'react';
import batman from '../../../../assets/images/labs/batman.jpeg';
import batman1 from '../../../../assets/images/labs/batman1.jpeg';
import batman2 from '../../../../assets/images/labs/batman2.jpeg';
import batman3 from '../../../../assets/images/labs/batman3.jpeg';

import heisenberg  from '../../../../assets/images/labs/heisenberg.png';
import heisenberg1 from '../../../../assets/images/labs/heisenberg1.jpeg';
import heisenberg2 from '../../../../assets/images/labs/heisenberg2.jpeg';
import heisenberg3 from '../../../../assets/images/labs/heisenberg3.jpeg';

import thor  from '../../../../assets/images/labs/thor.jpeg';
import thor1 from '../../../../assets/images/labs/thor1.jpeg';
import thor2 from '../../../../assets/images/labs/thor2.jpeg';
import thor3 from '../../../../assets/images/labs/thor3.jpeg';

import tesla from '../../../../assets/images/labs/tesla.jpeg';

import hulk  from '../../../../assets/images/labs/hulk.jpeg';
import hulk1 from '../../../../assets/images/labs/hulk1.jpeg';
import hulk2 from '../../../../assets/images/labs/hulk2.jpeg';
import hulk3 from '../../../../assets/images/labs/hulk3.jpeg';

import spiderman  from '../../../../assets/images/labs/spiderman.jpeg';
import spiderman1 from '../../../../assets/images/labs/spiderman1.jpeg';
import spiderman2 from '../../../../assets/images/labs/spiderman2.jpeg';
import spiderman3 from '../../../../assets/images/labs/spiderman3.jpeg';

import CardImage from './cardImage/CardImage';
import MenuCard from './menuCard/MenuCard';
import DirectionIcon from './directionIcon/DirectionIcon';
import Loading from './utils/Loading';
import Style from './labscube.module.scss';

export default class LabsCube extends Component{
  constructor(props){
    super(props);
    this.state = { 
      value:0,
      selectedImage: 0,
      displayCard: false,
      cardImages:null,
      loaded:false
     }
     setTimeout(() => {
       this.setState({
         cardImages:[
          {
            title:"spiderman",
            listImg:[
              spiderman,
              spiderman1,
              spiderman2,
              spiderman3
            ]
          },
          {
            title:"thor",
            listImg:[
              thor,
              thor1,
              thor2,
              thor3
            ]
          },  
          {
            title:"batman",
            listImg:[
              batman,
              batman1,
              batman2,
              batman3
            ]
          },
          {
            title:"hulk",
            listImg:[
              hulk,
              hulk1,
              hulk2,
              hulk3
            ]
          },
          {
            title:"heisenberg",
            listImg:[
              heisenberg,
              heisenberg1,
              heisenberg2,
              heisenberg3
            ]
          },
          {
            title:"Nicola tesla",
            listImg:[
              tesla,
              heisenberg1,
              heisenberg2,
              heisenberg3
            ]
          }      
        ], 
        loaded:true
       })
     }, 2000);
  }
  updateSelectedPhoto = (index) => {
    this.setState({
      selectedImage : index
    })
  }
  miseAjourValue = nouvelleValeur => {
    this.setState(state=>({
      value: state.value + nouvelleValeur
    }))
  }
  toggleCard = ()=>{
    this.setState({
      displayCard : !this.state.displayCard
    })
  }
  render(){   
    let content;
    const show = this.props.show ? "none" : "flex";
    if(this.state.displayCard){
      content = (
        <div className={ Style.cube } style={{ display:show }}>
          <div className={ Style.card }>
            <CardImage value={ this.state.value } images = { this.state.cardImages[this.state.selectedImage].listImg } />
            <MenuCard cardImages = { this.state.cardImages } updateSelectedPhoto = { this.updateSelectedPhoto } />
            <DirectionIcon  value={ this.state.value } callback = { this.miseAjourValue } />
          </div>    
        </div>
      )
    } else{
      content = (
        <div>No card: click "My card" pour afficher</div>
      )
    }
    return(
      <>
        { this.state.loaded ? (
          <div className={ Style.cubeanimation } style={{ textAlign:'center'}}>
            <h1 onClick = { this.toggleCard } className={ Style.titre } >My card</h1>
            { content }    
          </div>
        ) : (
          <div className={ Style.cubeanimation } style={{ textAlign:'center'}}>
            <Loading />    
          </div>
        ) }
      </>  
    )
  }
}