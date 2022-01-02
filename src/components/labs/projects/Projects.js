import React, { Component } from 'react';
import ButtonCategories from "../buttonCategories/ButtonCategories";
import Project from "./project/Project";
import Style from "./projects.module.scss";
export default class Projects extends Component{
  render(){ 
    let projects = this.props.state.projects; 
    const setCategory = this.props.setCategory;
    const displayCategory = this.props.state.displayCategory;
    let result;
    if (displayCategory === "TOUS") {
      result = projects.filter(p=>p);
    }else{
      result = projects.filter(p=>p.lang.includes(displayCategory));
    }
    return(
      <div className={ Style.projects+" projects" }>
        <div className="container">
          <h2 className="title-page">LABS</h2>
          <div className={ Style.projectsContent }>
            <ButtonCategories 
            projects = { projects } 
            setCategory = { setCategory }
            />    
            <ul className={ Style.projectsList }>
              {
                
              result.map((project) =>(
                <Project 
                key={`ProductItems-${project.title}`}
                project={project}
                />
              ) )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}