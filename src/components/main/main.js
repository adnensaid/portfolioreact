import React, { Component } from 'react';
import '../../index.scss';
import { AsideLeft, Pages, DropdownMenu, Burger ,AsideRight} from '../../components/index';
import { withRouter } from 'react-router-dom';

const AsideLeftWithRouter = withRouter(AsideLeft);
const PagesWithRouter = withRouter(Pages);
const AsideRightWithRouter = withRouter(AsideRight);
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      path:'',
      path2:'',
      classNameDropdown:'',
      classNameArrowLeft:'',
      classNameArrowRight:'',
      showAnimation:false,
      finishedAnimation:false,
    }
  }
  /* Dropdown animation */

  startStopAnimationDropdown = (e)=>{
    e.preventDefault();
    let classNameDropdown = this.state.classNameDropdown;
    if (classNameDropdown && classNameDropdown[0] !=='slideDownDropdown' && classNameDropdown[1] !== 'rotateBurger') {
      classNameDropdown = ['slideDownDropdown', 'rotateBurger'];
    }else{
      classNameDropdown = ['slideUpDropdown', 'rotateBackBurger'];
    }
    this.setState({
      classNameDropdown:classNameDropdown
    })
  }
  onAnimationStartDropdown = ()=>{
    this.setState({
      showAnimation:true,
      finishedAnimation:false
    })
  }
  
  onAnimationEndDropdown = ()=>{
    this.setState({
      showAnimation:false,
      finishedAnimation:true
    })
  }

  /* animation Arrow right */

  startStopAnimationArrowRight = (p)=>{
    const classNameArrowRight = this.state.classNameArrowRight;
    this.setState({
      classNameArrowRight:classNameArrowRight ? '' : ['rotateBarTopRight','rotateBarBottomRight', 'translateTextRight', 'translate-burger', 'translate-icon-left']
    })
    //this.startStopAnimationBurger();
    setTimeout(() => {
      this.setState({
        classNameArrowRight:''
      })
      this.props.history.push(p);
    }, 1600);
  }
    /* animation Arrow left */
    startStopAnimationArrowLeft = (p, e)=>{
      e.preventDefault();
      const classNameArrowLeft = this.state.classNameArrowLeft;
      this.setState({
        classNameArrowLeft:classNameArrowLeft ? '' : ['rotate45', 'rotateinverse45', 'translateText', 'translate-burger', 'translate-icon-right']
      });
      setTimeout(() => {
        this.setState({
          classNameArrowLeft:''
        })
        this.props.history.push(p);
      }, 1600);
    }

  render(){
    return(
      <div 
      className="main" style={{ minHeight:'100vh', position:'relative' }}
      >
      <AsideLeftWithRouter
      startStopAnimationArrowLeft = { this.startStopAnimationArrowLeft }
      classNameArrowLeft = { this.state.classNameArrowLeft }
      classNameArrowRight = { this.state.classNameArrowRight }
      />
      <PagesWithRouter

      />
      <AsideRightWithRouter
        startStopAnimationArrowRight = { this.startStopAnimationArrowRight }
        classNameArrowRight = { this.state.classNameArrowRight }
        classNameArrowLeft = { this.state.classNameArrowLeft }
      />
      <DropdownMenu
        className = { this.state.classNameDropdown }
        startStopAnimation = { this.startStopAnimationDropdown }
        onAnimationStartDropdown = { this.onAnimationStartDropdown }
        onAnimationEndDropdown = { this.onAnimationEndDropdown }
      />  
      <Burger
      startStopAnimation = { this.startStopAnimationDropdown }
      className={ this.state.classNameDropdown }
      classNameArrowLeft = { this.state.classNameArrowLeft }
      classNameArrowRight = { this.state.classNameArrowRight }
      onAnimationStart = { this.onAnimationStartDropdown }
      onAnimationEnd = { this.onAnimationEndDropdown }


      />
    </div>    
    )
  }
}