import React from 'react';
import Style from './latest.module.scss';
const Latest = (props)=>{
  return(
    <div 
    className={ Style.latest+" "+props.classNameArrowLeft[4]+" "+props.classNameArrowRight[4] }
    >
      <div>LATEST REACT APP</div>
    </div>
  )
}
export default Latest;