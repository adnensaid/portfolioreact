import React,{ Component } from 'react';
import Style from './buttoncategories.module.scss';

export default class ButtonCategories extends Component{
  constructor(props){
    super(props);
    this.state={
      listLang:[]
    }
  }
  filterListarray = (p)=>{
    let listLang = [];
    p.forEach(element => {
      element.lang.forEach(lang=>listLang.push(lang));
    });
    listLang = [...new Set(listLang)];
    return listLang
  }
  render(){
    let listLang = this.filterListarray(this.props.projects);
    return(
      <ul className={ Style.navCategories+" nav nav-pills" } id="pills-tab nav-categories" role="tablist">
      { listLang.map((lang, i)=>(
        <li
        key={lang}
        className={ Style.navItem+" nav-item" }
        role="presentation"
        >
          <button
          className={i===0 ? Style.navLink+` nav-link active` : Style.navLink+` nav-link`}
          onClick={() => this.props.setCategory(lang)}
          id="pills-contact-tab" 
          data-bs-toggle="pill" 
          data-bs-target="#pills-contact" 
          type="button" 
          role="tab" 
          aria-controls="pills-contact" 
          aria-selected="false"
          >
            {lang}
          </button>
        </li>
      )) }
    </ul>          
    )
  }
}

/* const ButtonCategories = (props)=>{
  let listLang = [];
  props.projects.map(proj =>{
    proj.lang.map(lang=>{
      listLang.push(lang);
    });
  });
  listLang = [...new Set(listLang)];
  listLang.unshift("TOUS");
  return(
    <ul className={ Style.navCategories+" nav nav-pills" } id="pills-tab nav-categories" role="tablist">
      { listLang.map((lang, i)=>(
        <li
        key={lang}
        className={ Style.navItem+" nav-item" }
        role="presentation"
        >
          <button
          className={i===0 ? Style.navLink+` nav-link active` : Style.navLink+` nav-link`}
          onClick={() => props.setCategory(lang)}
          id="pills-contact-tab" 
          data-bs-toggle="pill" 
          data-bs-target="#pills-contact" 
          type="button" 
          role="tab" 
          aria-controls="pills-contact" 
          aria-selected="false"
          >
            {lang}
          </button>
        </li>
      )) }
    </ul>    
  )
}
export default ButtonCategories; */