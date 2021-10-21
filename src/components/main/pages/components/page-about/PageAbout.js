import React from 'react';
import Style from './PageAbout.module.scss';
const PageAbout = ()=>{
  return(
      <div className={ Style.about+" flex-fill d-flex flex-column justify-content-center" }>
        <div className="container">
          <div className={ Style.aboutContent+" d-flex flex-column align-items-center" }>
            <h1 className={ Style.title }>Hi, je m'appelle Adnen</h1>
            <p className={ Style.text }>
              <strong>Intégrateur</strong> et <strong> développeur web </strong> junior.
              une liste de mes derniers projets
              dans la page portfolio.
            </p>
            <div className={ Style.lienUtiles+" d-flex flex-nowrap" }>
              <button className="btn btn-primary shadow-lg rounded text-nowrap">VOIR MON CV</button>
              <button className="btn btn-secondary shadow-lg rounded text-nowrap"><a href="https://youthful-noyce-04c1bb.netlify.app" target="_blank" rel="noreferrer" style={{ color:'white' }}>LAST REACT APP</a></button>    
            </div>
          </div>
        </div>
      </div>
  )
}
export default PageAbout;