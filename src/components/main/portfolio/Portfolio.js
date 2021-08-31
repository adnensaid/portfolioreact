import React, { Component } from 'react';
import ArticlesList from './articlesList/ArticleList';
import imgBerberes from '../../../assets/images/berberes1.png';
import imgYoutube from '../../../assets/images/youtube.png';
import imgLedor from '../../../assets/images/ledor.jpg';
import imgSkill from '../../../assets/images/film.png' ;
import imgWebify from '../../../assets/images/webify.png'; 
import imgTodolist from '../../../assets/images/todolist.png';
import Footer from '../footer/Footer';
export default class Portfolio extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'Portfolio',
      description:'Découvrez mes derniers projets de développement de logiciels Web.',
      articles : [
      {
        title:'Webify technology',
        img:imgWebify,
        lang:['REACTJS', 'JSX','HTML', 'CSS3', 'ANIMATION', 'GRID', 'FLEX', 'more...'],
        path: 'https://youthful-noyce-04c1bb.netlify.app'
      },  
      {
        title:'Youtube chaine',
        img:imgYoutube,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'GRID', 'FLEX', 'JS', 'more...'],
        path: 'https://ecstatic-snyder-aaba71.netlify.app/youtube.html'
      },{
        title:'Secret berberes',
        img:imgBerberes,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'GRID', 'FLEX', 'more...'],
        path:'https://ecstatic-snyder-aaba71.netlify.app/berberes.html'
      },{
        title:'Agence ledor',
        img:imgLedor,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES','more...'],
        path:'https://ecstatic-snyder-aaba71.netlify.app/ledor.html'
      },{
        title:'Skill',
        img:imgSkill,
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'FLEX', 'more...'],
        path:'https://ecstatic-snyder-aaba71.netlify.app/skill.html'
      },
      {
        title:'todolist',
        img:imgTodolist,
        lang:['HTML', 'CSS3', 'JS', 'more...' ],
        path:'https://ecstatic-snyder-aaba71.netlify.app/todolist.html'
      }
    ]
    }
  }
  render(){
    return(
      <>
      <ArticlesList
      { ...this.state }
      show = { this.props.show }
      finishedAnimation = { this.props.finishedAnimation }
      />
      <Footer />  
      </>
    )    
  }
}