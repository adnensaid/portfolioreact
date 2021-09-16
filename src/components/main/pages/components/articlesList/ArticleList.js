import React, { Component } from  'react';
import { withRouter } from 'react-router-dom';
import Style from './articlesList.module.scss';
import ArticleElem from './articleElem/ArticleElem';

const ArticleElemWithRouter = withRouter(ArticleElem);
export default class ArticlesList extends Component{
  render(){
    return(
      <div className={ Style.articles }>
        <div className="container">
          <div className={ Style.articlesText }>
            <h1
            >{ this.props.name }</h1>
            <p>
              { this.props.description }  
            </p> 
          </div>
          <div className={ Style.articlesList }> 
          { this.props.articles.map((a, index)=>(
            <ArticleElemWithRouter
            key={a.title + index}
            article = { a }
            />
          )) 
          }               
        </div>  
      </div>
    </div>  
    )
  }
}
