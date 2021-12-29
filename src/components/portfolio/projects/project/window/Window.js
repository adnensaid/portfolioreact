import React, { Component } from 'react';
import Style from  "./window.module.scss";
export default class Window extends Component{
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
      <div
        className={ Style.window }
        onMouseEnter = { this.onMouseEnter }
        onMouseLeave = { this.onMouseLeave }
      >
        <div className={ Style.articlesElemTitre }>
          <i></i>
          <h4> { this.props.project.title } </h4>
        </div>
        <div className={ Style.articlesElemContent }>
          <img src={ this.props.project.img } alt={ "img-"+this.props.title } className={ Style.imgWindow } /> 
          { this.state.showAnimation && (
            <ul className={ Style.langList } >
              { this.props.project.lang.map((l, index)=>(
                <li
                  key={index}
                  style={{animation:` show-lang 0.1s cubic-bezier(.25,.8,.25,1) forwards ${ 0.3 + index/10 }s` }}
                > 
                 { l }
                </li>
              )) }
            </ul>    
          ) }         
        </div>
      </div>         
    )
  }
}