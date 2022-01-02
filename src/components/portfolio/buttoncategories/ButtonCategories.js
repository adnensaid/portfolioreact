import React from 'react';
import Style from "./buttoncategories.module.scss";
const ButtonCategories = (props) => {
  // get unique category items
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
  const projectCategories = props.projects.map(proj => proj.category).filter(
    uniqueItems
  )
  projectCategories.unshift("TOUS");
  //projectCategories.sort();
  return  (
    <ul className={ Style.navCategories+" nav nav-pills nav-fill" } id="pills-tab nav-categories" role="tablist">
    {
      projectCategories.map((category, i)=> (
        <li
        key={category}
        className="nav-item"
        role="presentation"
        >
          <button
            className={i===0 ? Style.navLink+` nav-link active` : Style.navLink+` nav-link`}
            onClick={() => props.setCategory(category)}
            id="pills-contact-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#pills-contact" 
            type="button" 
            role="tab" 
            aria-controls="pills-contact" 
            aria-selected="false"
          >
            {category}
          </button>    
        </li>
      ))
    }
    </ul>
  )
}
export default ButtonCategories;