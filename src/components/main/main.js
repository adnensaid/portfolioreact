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
      classNameIconLeft:'',
      classNameIconRight:'',
      classNameBurger: '',
      classNameBurger2: '',
      classNameArrowLeft:'',
      classNameArrowRight:'',
      classNameText:'',
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
      classNameArrowRight:classNameArrowRight ? '' : ['rotateBarTopRight','rotateBarBottomRight', 'translateTextRight'],
      path:p
    })
    this.startStopAnimationBurger();
  }

  /* animation burger */
  startStopAnimationBurger = ()=>{
    const classNameBurger = this.state.classNameBurger;
    this.setState({
      classNameBurger:classNameBurger ? '' : 'translate-burger'
    })
    this.startStopAnimationIconLeft();
  }  
  startStopAnimationIconLeft = ()=>{
    const classNameIconLeft = this.state.classNameIconLeft;
    this.setState({
      classNameIconLeft:classNameIconLeft ? '' : 'translate-icon-left'
    })
    this.startStopAnimationText();
  }
  startStopAnimationText = ()=>{
    const classNameText = this.state.classNameText;
    this.setState({
      classNameText:classNameText ? '': 'fadeIn-content'
    })
  }



  onAnimationStartArrowRight = ()=>{
    this.setState({
      showAnimation:true,
      finishedAnimation:false
    })
  }

  onAnimationEndArrowRight = ()=>{
    const path = this.state.path;
    this.setState({
      showAnimation:false,
      finishedAnimation:true,
      classNameDropdown:'',
      classNameArrowRight:'',
      classNameBurger:'',
      classNameIconLeft:'',
      classNameText:''
    })
    console.log('fin:Rihgt');
    this.props.history.push(path);

  }

    /* animation Arrow left */
    startStopAnimationArrowLeft = (p)=>{
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
      classNameIconLeft = { this.state.classNameIconLeft }
      classNameArrowLeft = { this.state.classNameArrowLeft }
      />
      <PagesWithRouter
        classNameText = { this.state.classNameText }
        onAnimationStart = { this.onAnimationStartArrowRight }
        onAnimationEnd = { this.onAnimationEndArrowRight }

      />
      <AsideRightWithRouter
        startStopAnimationArrowRight = { this.startStopAnimationArrowRight }
        classNameArrowRight = { this.state.classNameArrowRight }
        onAnimationEndArrowLeft = { this.onAnimationEndArrowLeft }
        classNameIconRight = { this.state.classNameIconRight }
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
      onAnimationStart = { this.onAnimationStartDropdown }
      onAnimationEnd = { this.onAnimationEndDropdown }
      classNameBurger = { this.state.classNameBurger }
      classNameBurger2 = { this.state.classNameBurger2 }
      onAnimationStartArrowLeft = { this.onAnimationStartArrowLeft }
      onAnimationEndArrowLeft = { this.onAnimationEndArrowLeft }

      />
    </div>    
    )
  }
}