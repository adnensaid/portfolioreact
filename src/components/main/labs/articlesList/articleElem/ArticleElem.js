import React,{ Component } from 'react';
import Style from '../articlesList.module.scss';
import { NavLink } from 'react-router-dom';

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
      <NavLink
        className={ Style.articlesElem }
        to={`${ this.props.article.path }`} 
        onMouseEnter = { this.onMouseEnter }
        onMouseLeave = { this.onMouseLeave }
      >
        <div className={ Style.articlesElemTitre }>
          <p>{ this.props.article.title }</p>
          <i></i>
        </div>
        <div className={ Style.articlesElemImg } style={{  minHeight:'20rem',background:`center center / cover url(${ this.props.article.img }) no-repeat` }} >
          {/* <img src={ this.props.article.img } alt="img" /> */}
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
      </NavLink>   
    )
  }
}