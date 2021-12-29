import React, { Component } from 'react';
import Style from './arrowanimation.module.scss';
import ArrowRight from './arrowright/ArrowRight';
export default class ArrowAnimation extends Component{

  render(){
    const show = this.props.show ? "none" : "block";
    return(
      <div className={ Style.labsContent } style={{ display:show }}>
        <h1>Arrow animation</h1> 
        <div className={ Style.window }>
          <div className={ Style.windowTitre }>
            <i></i>  
            <p>Arrow animation</p>
          </div>
          <div className={ Style.windowContent }>
            <ArrowRight />
          </div> 
        </div>  
        <ul className={ Style.logiqueArrow }>
          <li className={ Style.logiqueArrowElem }>  
            <div className={ Style.logiqueArrowElemIndex }>1</div> 
            <div className={ Style.logiqueArrowElemContent }>
              <i className={ Style.logiqueArrowElemBarTop }></i>
              <p>BarTop= <span className={ Style.textRed }>r</span></p>    
            </div>
            <div className={ Style.logiqueArrowElemContent }>
              <i className={ Style.logiqueArrowElemBarTop }></i>
              <p>Rotate circle: <span className={ Style.textRed }>-45deg</span></p>    
            </div>  
          </li>
          <li className={ Style.logiqueArrowElem }>  
            <div className={ Style.logiqueArrowElemIndex }>2</div> 
            <div className={ Style.logiqueArrowElemContent }>
              <i className={ Style.logiqueArrowElemBarBottom }></i>
              <p>BarBottom: <span className="text-blue">r(Rayon)</span></p>    
            </div>
            <div className={ Style.logiqueArrowElemContent }>
              <i className={ Style.logiqueArrowElemBarBottom }></i>
              <p>Rotate circle: <span className="text-blue">45deg</span></p>    
            </div>      
          </li>
          <li className={ Style.logiqueArrowElem }>  
            <div className={ Style.logiqueArrowElemIndex }>3</div>
            <div className={ Style.logiqueArrowElemContent }>
              <p>Superposer <span className="text-red">c1</span> <span className="text-blue">c2</span></p>      
            </div>
          </li> 
          <li className={ Style.logiqueArrowElem }>  
            <div className={ Style.logiqueArrowElemIndex }>4</div>
            <div className={ Style.logiqueArrowElemContent }>
              <p>Hover</p>
              <p><span className="text-red">C1</span>Rotation -50deg</p>
              <p><span className="text-blue">C2</span>Rotation 50deg</p>          
            </div>
          </li>    
        </ul>
      </div>
    )
  }
}