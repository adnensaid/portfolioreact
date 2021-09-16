import React, { Component } from 'react';
import imgMontre from '../../../../../assets/images/labs/montre.png';
import imgCube from '../../../../../assets/images/labs/labsCube.png';
import imgSocial from '../../../../../assets/images/labs/socials.png';
import imgArrow from '../../../../../assets/images/labs/arrow.png';
import imgProgress from '../../../../../assets/images/labs/progress.png';
import imgForm from '../../../../../assets/images/labs/formvalidate.png';
import ArticlesList from '../articlesList/ArticleList';
import Footer from '../footer/Footer';
export default class Labs extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'Labs',
      description:'Découvrez mes derniers réalisations utiles à la création du design.',
      articles : [
        {
          title:'FIELD ARRAY',
          img:imgForm,
          path:'/field-array',
          lang:['REACTJS','FORMIK', 'YUP', 'more...'] 

        },
        {
          title:'FORM VALIDATION',
          img:imgForm,
          path:'/form-validation',
          lang:['REACTJS', 'FORMIK', 'YUP', 'more...'] 

        },
        {
          title:'Super Heros',
          img:imgCube,
          path:'/labs-cube',
          lang:['REACTJS', 'JSX', 'CSS3', 'ANIMATION', 'more...']
        },
        {
        title:'Progress animation',
        img:imgProgress,
        path:'/progress-animation',
        lang:[ 'REACTJS', 'JSX' ,'HTML', 'CSS3', 'ANIMATION', 'more...']
      },{
        title:'Socials Animation',
        img:imgSocial,
        path:'/socials-animation',
        lang:['HTML', 'CSS3', 'more...']
      },{
        title:'Montre',
        img:imgMontre,
        path:'/montre',
        lang:['HTML', 'CSS3', 'JS', 'more...']
      }
      ,{
        title:'Arrow animation',
        img:imgArrow,
        path:'/arrow-animation',
        lang:['HTML', 'CSS3', 'more...']
      }
    ]
    }
  }
  render(){
    return(   
      <>
      <ArticlesList
        articles = { this.state.articles }
        name = { this.state.name }
        description = { this.state.description }
      /> 
      <Footer /> 
      </>
    )
  }
}