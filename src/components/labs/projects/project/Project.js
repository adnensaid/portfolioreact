import React from 'react';
import Style from "./project.module.scss";
const Project = (props)=>{

  return(
    <div className={ Style.projectElem+" card bg-light" }>
      <img src={ props.project.img } className="card-img-top" alt="progress" />
      <div className="card-body d-flex align-items-center justify-content-center">
        <h5 className={ Style.cardTitle+" card-title" }> { props.project.title } </h5>
      </div>
    </div>
  )
}
export default Project;