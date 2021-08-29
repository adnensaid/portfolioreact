import React from 'react';
import styles from './PageAbout.module.scss';
const PageAbout = ()=>{
  return(
    <div className={ styles.pageAbout }>
    <h1>Hi, je m'appelle <strong>Adnen</strong> Said </h1>
    <p>
      Je suis développeur Front end HTML, CSS et Javascript,
      vous trouvez une liste de mes dernièrs projets
      dans la page portfolio    
    </p>
  </div>    
  )
}
export default PageAbout;