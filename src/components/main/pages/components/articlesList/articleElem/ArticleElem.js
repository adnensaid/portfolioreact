import React,{ Component } from 'react';
import Style from '../articlesList.module.scss';

export default class ArticleElem extends Component{

  constructor(props){
    super(props);
    this.state = {
      showAnimation : false
    }
  }
  onMouseEnter = ()=>{
    this.setState({
      showAnimation :true
    })
  }
  onMouseLeave = ()=>{
    this.setState({
      showAnimation :false
    })
  }
  render(){
    return(
      <a
        className={ Style.articlesElem }
        href={`${ this.props.article.path }`} 
        onMouseEnter = { this.onMouseEnter }
        onMouseLeave = { this.onMouseLeave }
        target="_blank"
        rel="noreferrer"
      >
        <div className={ Style.articlesElemTitre+" d-flex align-items-center" }>
          <i></i>
          <p className="flex-fill">{ this.props.article.title }</p>
        </div>
        <div className={ Style.articlesElemImg } style={{ background:`center center / cover url(${ this.props.article.img }) no-repeat` }} >
          { this.state.showAnimation && (
              <ul className={ Style.langList } >
                { this.props.article.lang.map((l, index)=>(
                  <li
                    key={index}
                    style={{animation:` show-lang 0.1s ease forwards ${ 0.4 + index/10 }s` }}
                  > 
                  { l } 
                  </li>
                )) }
              </ul>  
          ) }
        </div>
      </a>   
    )
  }
}

/*

      <a
        className={ Style.articlesElem }
        href={`${ this.props.article.path }`} 
        onMouseEnter = { this.onMouseEnter }
        onMouseLeave = { this.onMouseLeave }
        target="_blank"
        rel="noreferrer"
      >
        <div className={ Style.articlesElemTitre }>
          <p>{ this.props.article.title }</p>
          <i></i>
        </div>
        <div className={ Style.articlesElemImg } style={{  minHeight:'20rem',background:`center center / cover url(${ this.props.article.img }) no-repeat` }} >
          { this.state.showAnimation && (
              <ul className={ Style.langList } >
                { this.props.article.lang.map((l, index)=>(
                  <li
                    key={index}
                    style={{animation:` show-lang 0.1s ease forwards ${ 0.4 + index/10 }s` }}
                  > 
                  { l } 
                  </li>
                )) }
              </ul>  
          ) }
 
        </div>
      </a>   
 */