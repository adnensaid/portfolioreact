import React from 'react';
import Style from './PageAbout.module.scss';
const PageAbout = ()=>{
  return(
    <>
      <div className={ Style.pageAbout }>
        <h1>Hi, je m'appelle Adnen said</h1>
        <p>
          Je suis développeur Frontend <strong className={ Style.lang }>HTML, CSS3, JS et REACTJS </strong>
          vous trouvez une liste de mes dernièrs projets
          dans la page portfolio    
        </p>
      </div>   
      <div className={ Style.cv }>
        <a href="https://www.adnensaid.fr/contact" className="shadow">Voir mon cv</a>
      </div>
    </>   
  )
}
export default PageAbout;