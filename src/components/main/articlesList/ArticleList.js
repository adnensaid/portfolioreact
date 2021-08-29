import React, { Component } from  'react';
import Style from './articlesList.module.scss';
import ArticleElem from './articleElem/ArticleElem';

export default class ArticlesList extends Component{
  render(){
    const show = this.props.show ? "block" : "none"
    return(
      <div className={ Style.articles } style={{ display:show }}>
        <div className={ Style.articlesContent }>
          <div className={ Style.articlesText }>
            <h1>{ this.props.name }</h1>
            <p>
              { this.props.description }  
            </p> 
          </div>
          <div className={ Style.articlesList }> 
          { this.props.articles.map((a, index)=>(
            <ArticleElem
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
