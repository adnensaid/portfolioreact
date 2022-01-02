import React from 'react';
import Style from './buttoncategories.module.scss';
const ButtonCategories = (props)=>{
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
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
export default ButtonCategories;