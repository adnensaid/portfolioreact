import React from 'react';
import Style from './latest.module.scss';
const Latest = (props)=>{
  return(
    <a 
    href="https://youthful-noyce-04c1bb.netlify.app"
    target="_blank"
    rel="noreferrer"
    className={ Style.latest+" "+props.classNameArrowLeft[4]+" "+props.classNameArrowRight[4] }
    >
      <div>LATEST REACT APP</div>
    </a>
  )
}
export default Latest;