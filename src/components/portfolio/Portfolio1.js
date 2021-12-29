import React, { Component } from 'react';
import ArticlesList from './articlesList/ArticleList';
import Filter from '../filter/Filter';
import imgYoutube from '../../assets/images/portfolio/youtube.svg';
import imgWebify from '../../assets/images/portfolio/webify.png'; 
import imgPizzeria from '../../assets/images/portfolio/pizzerria.png';
import Footer from '../footer/Footer';
//import imgBerberes from '../../assets/images/portfolio/berberes.png';
//import imgLedor from '../../assets/images/portfolio/ledor.svg';
//import imgSkill from '../../assets/images/portfolio/film.svg' ;
//import imgTodolist from '../../assets/images/portfolio/todolist.svg';
export default class Portfolio extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'PORTFOLIO',
      description:'Découvrez mes derniers projets de développement de logiciels Web.',
      articles : [
      {
        title:'WEBIFY TECHNOLOGY',
        img:imgWebify,
        date:"2021",
        descriptif:"Un stage de 2 mois chez WEBIFY, j'ai travaillé en relation avec le designeur pour convertir les maquettes psd et gérer les routes et les animations",
        type :"stage",  
        lang:['REACTJS', 'JSX','HTML', 'CSS3', 'ANIMATION', 'GRID', 'FLEX', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'https://youthful-noyce-04c1bb.netlify.app'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid/webifyReact'
        }
      ]
      },  
      {
        title:'PIZZERIA',
        img:imgPizzeria,
        date:"2021",
        descriptif:"Conversion maquette, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
        type :"projet perso",  
        lang:['REACTJS', 'JSX','HTML', 'CSS3', 'GRID', 'FLEX', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'https://reverent-panini-99171d.netlify.app/'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid/pizza'
        }
      ]
      },
      {
        title:'YOUTUBE CANAL',
        img:imgYoutube,
        date:"2021",
        descriptif:"Intégration page youtube, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
        type :"projet perso",
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'GRID', 'FLEX', 'JS', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'https://ecstatic-snyder-aaba71.netlify.app/youtube.html'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid'
        }
      ]
    }
    /* ,{
        title:'todolist',
        img:imgTodolist,
        date:"2021",
        descriptif:"todolist basic",
        type :"projet perso",  
        lang:['HTML', 'CSS3', 'JS', 'more...' ],
        path:'https://ecstatic-snyder-aaba71.netlify.app/todolist.html',
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'https://ecstatic-snyder-aaba71.netlify.app/youtube.html'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid'
        }
      ]
    }  ,{
        title:'Secret berberes',
        img:imgBerberes,
        date:"2021",
        descriptif:"Agence de communication digital",
        type :"entretien canari",  
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'GRID', 'FLEX', 'more...'],
        path:'https://ecstatic-snyder-aaba71.netlify.app/berberes.html'
      },{
        title:'Agence ledor',
        img:imgLedor,
        date:"2021",
        descriptif:"Intégration web",
        type :"projet perso",  
        lang:['HTML', 'CSS3', 'MEDIA QUERIES','more...'],
        path:'https://ecstatic-snyder-aaba71.netlify.app/ledor.html'
      },{
        title:'Skill',
        img:imgSkill,
        date:"2021",
        descriptif:"animation en html css",
        type :"projet perso",  
        lang:['HTML', 'CSS3', 'MEDIA QUERIES', 'ANIMATION', 'FLEX', 'more...'],
        path:'https://ecstatic-snyder-aaba71.netlify.app/skill.html'
      },
      {
        title:'todolist',
        img:imgTodolist,
        date:"2021",
        descriptif:"todolist basic",
        type :"projet perso",  
        lang:['HTML', 'CSS3', 'JS', 'more...' ],
        path:'https://ecstatic-snyder-aaba71.netlify.app/todolist.html'
      } */
    ]
    }
  }
  render(){
    const url =  this.props.location.pathname.split('/');
    const filter =  url[url.length - 1];
    return(
      <div style={{ marginTop:'20rem' }}>
      <Filter />
      <ArticlesList
      { ...this.state }
      {  ...this.props }
      filter = {filter}
      show = { this.props.show }
      finishedAnimation = { this.props.finishedAnimation }
      classNameArrowRight={this.props.classNameArrowRight} 
      classNameArrowLeft ={ this.props.classNameArrowLeft }
      />
      <Footer />  
      </div>
    )    
  }
}