import React, { Component } from 'react';
import ButtonCategories from "../buttoncategories/ButtonCategories";
import Project from "./project/Project";
import Style from "./projects.module.scss";
export default class Projects extends Component{
  render(){ 
    let projects = this.props.state.projects; 
    const setCategory = this.props.setCategory;
    const displayCategory = this.props.state.displayCategory;
    return(
      <div className={ Style.projects+" projects" }>
        <div className="container">
          <h2 className="title-page">PORTFOLIO</h2>
          <p className={ Style.text }> Utilisez le filtre pour afficher tous les projets par compétence. </p>
          <div className={ Style.projectsContent }>
            <ButtonCategories 
            projects = { projects } 
            setCategory = { setCategory }
            />    
            <ul className={ Style.projectsList }>
              {
              projects.filter(({category}) =>
                displayCategory === category || displayCategory === "TOUS"
              ).map((project) =>(
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