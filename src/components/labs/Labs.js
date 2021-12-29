import React, { Component } from 'react';
import imgMontre from '../../assets/images/labs/montre.png';
import imgCube from '../../assets/images/labs/labsCube.png';
import imgSocial from '../../assets/images/labs/socials.png';
import imgArrow from '../../assets/images/labs/arrow.png';
import imgProgress from '../../assets/images/labs/progress.png';
import imgForm from '../../assets/images/labs/formvalidate.png';
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
          date:"2021",
          descriptif:"Formulaires React",
          type :"perso",  
          lang:['REACTJS','FORMIK', 'YUP', 'more...'],
          link:[{
            name: 'web',
            class:'fa-github',
            path:'/field-array'
          },{
            name:'github',
            class:'fa-github-alt',
            path:'https://github.com/adnensaid'
          }
        ]

        },
        {
          title:'FORM VALIDATION',
          img:imgForm,
          date:"2021",
          descriptif:"Formulaires validation React",
          type :"perso",  
          lang:['REACTJS', 'FORMIK', 'YUP', 'more...'],
          link:[{
            name: 'web',
            class:'fa-chrome',
            path:'/form-validation'
          },{
            name:'github',
            class:'fa-github-alt',
            path:'https://github.com/adnensaid'
          }
        ]

        },
        {
          title:'Super Heros',
          img:imgCube,
          date:"2021",
          descriptif:"cube rotate",
          type :"perso",  
          lang:['REACTJS', 'JSX', 'CSS3', 'ANIMATION', 'more...'],
          link:[{
            name: 'web',
            class:'fa-chrome',
            path:'/labs-cube'
          },{
            name:'github',
            class:'fa-github-alt',
            path:'https://github.com/adnensaid'
          }
        ]  
        },
        {
        title:'Progress animation',
        img:imgProgress,
        date:"2021",
        descriptif:"animation React state",
        type :"perso",  
        lang:[ 'REACTJS', 'JSX' ,'HTML', 'CSS3', 'ANIMATION', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'/progress-animation'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid'
        }
      ]    
      },{
        title:'Socials Animation',
        img:imgSocial,
        date:"2021",
        descriptif:"socials medias component animation",
        type :"perso",    
        path:'/socials-animation',
        lang:['HTML', 'CSS3', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'/socials-animation'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid'
        }
      ]   
      },{
        title:'Montre',
        img:imgMontre,
        date:"2021",
        descriptif:"montre style & code",
        type :"perso",    
        path:'/montre',
        lang:['HTML', 'CSS3', 'JS', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'/montre'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid'
        }
      ]     
      }
      ,{
        title:'Arrow animation',
        img:imgArrow,
        date:"2021",
        descriptif:"Arrow direction animation",
        type :"perso",    
        path:'/arrow-animation',
        lang:['HTML', 'CSS3', 'more...'],
        link:[{
          name: 'web',
          class:'fa-chrome',
          path:'/arrow-animation'
        },{
          name:'github',
          class:'fa-github-alt',
          path:'https://github.com/adnensaid'
        }
      ]       
      }
    ]
    }
  }
  render(){
    return(   
      <>
{/*       <ArticlesList
        articles = { this.state.articles }
        name = { this.state.name }
        description = { this.state.description }
      />  */}
      <Footer /> 
      </>
    )
  }
}