import React, { Component } from 'react';
import ArticlesList from '../articlesList/ArticleList';
import imgBerberes from '../../../assets/images/berberes1.png';
import imgYoutube from '../../../assets/images/youtube.png';
import imgLedor from '../../../assets/images/ledor.jpg';
import imgSkill from '../../../assets/images/film.png' ;

export default class Portfolio extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'Portfolio',
      description:'Découvrez mes derniers projets de développement de logiciels Web.',
      articles : [{
        title:'Youtube chaine',
        img:imgYoutube,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'GRID', 'FLEX', 'JS', 'more...']
      },{
        title:'Secret berberes',
        img:imgBerberes,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'GRID', 'FLEX', 'more...']
      },{
        title:'Agence ledor',
        img:imgLedor,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES','more...']
      },{
        title:'Skill',
        img:imgSkill,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'FLEX', 'more...']
      }
    ]
    }
  }
  render(){
    return(
      <ArticlesList
      { ...this.state }
      show = { this.props.show }
      finishedAnimation = { this.props.finishedAnimation }
      />
    )    
  }
}