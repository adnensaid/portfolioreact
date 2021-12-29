import React from 'react';
import Style from  "../projects.module.scss";
import Window from "./window/Window";

const TextProjet = (props) =>(
  <div className={ Style.articleElemTexto }>
  <h2 className="title-secondary">{ props.project.title }</h2>
  <p className="paragraph">
    { props.project.descriptif }
  </p>
  <span className={ Style.date }>JUIL 2021 - AOUT 2021</span>
  <ul className={ Style.linkArticle } >
  { props.project.link.map((l, index)=>(
    <li
    key={index}
    >
      <a href={ l.path }> { l.name } </a>
    </li>
  )) }
  </ul>      
</div>
)

const Project = (props)=>(
  <li className={ Style.projectsElem }>
    <TextProjet project = { props.project } />    
    <Window project = { props.project } />  
  </li>
)
export default Project;
