import React, { Component } from 'react';
import MenuCardElement from './menuCardElem/MenuCardElement';
import Style from './menucard.module.scss';
export default class MenuCard extends Component{
  render(){
    return(
      <ul className={ Style.cardBody }>
          {
           this.props.cardImages.map((c, index)=>(
            <MenuCardElement key= { index } title = { c.title } updateSelectedPhoto = { ()=>this.props.updateSelectedPhoto(index) } />
           ))  
          }
      </ul> 
    )
  }
}