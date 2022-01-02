import React from 'react';
import Style from './loading.module.scss';
const Loading = ()=>{
  return(
    <div className={ Style.loadPage }> 
      <div className={ Style.circles }>
        <div className={ Style.circle +" "+ Style.circle1}></div>
        <div className={ Style.circle +" "+ Style.circle2}></div>
        <div className={ Style.circle +" "+ Style.circle3}></div>
        <div className={ Style.circle +" "+ Style.circle4}></div>
        <div className={ Style.circle +" "+ Style.circle5}></div>
        <div className={ Style.circle +" "+ Style.circle6}></div>
        <div className={ Style.circle +" "+ Style.circle7}></div>
        <div className={ Style.circle +" "+ Style.circle8}></div>
        <div className={ Style.circle +" "+ Style.circle9}></div>
        <div className={ Style.circle +" "+ Style.circle10}></div>
        <div className={ Style.circle +" "+ Style.circle11}></div>
        <div className={ Style.circle +" "+ Style.circle12}></div>
        <div className={ Style.circle +" "+ Style.circle13}></div>
        <div className={ Style.circle +" "+ Style.circle14}></div>
        <div className={ Style.circle +" "+ Style.circle15}></div>
        <div className={ Style.circle +" "+ Style.circle16}></div>
        <div className={ Style.circle +" "+ Style.circle17}></div>
      </div>  
    </div>
  )
}
export default Loading;