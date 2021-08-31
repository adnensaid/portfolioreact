import React, { Component } from 'react';
import '../../index.scss';
import { AsideLeft, PageAbout, Portfolio, Labs, Contact, DropdownMenu ,AsideRight, LabsCube, ProgressAnimation, SocialAnimation, Montre, ArrowAnimation, Burger, Latest, FormValidation, FieldArray, Carousel, CarouselWithForm} from '../../components/index';
import { Route ,Switch, Redirect, withRouter } from 'react-router-dom';

const AsideLeftWithRouter = withRouter(AsideLeft);
const AsideRightWithRouter = withRouter(AsideRight);
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      path:'',
      className:[],
      classNameArrowLeft:[],
      classNameArrowRight:[],
      showAnimation:false,
      finishedAnimation:false,
      showAnimationArrow:false,
      finishedAnimationArrow:false,
      show : true
    }
  }
  /* Dropdown animation */
  startStopAnimationDropdown = ()=>{
    const className = this.state.className;
    this.setState({
      className:className.length ? [] : ['animateDropdownMenu', 'rotateBurger'],
      show: !this.state.show

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
      finishedAnimation:true,
    })
  }

  /* animation Arrow left */
  startStopAnimationArrowLeft = (e)=>{
    e.preventDefault();
    const classNameArrowLeft = this.state.classNameArrowLeft;
    this.setState({
      classNameArrowLeft:classNameArrowLeft.length ? [] : ['rotate45' ,'rotateinverse45', 'translateText', 'translate-burger', 'translate-latest', 'translate-arrow-right']
    })
  }
  onAnimationStartArrowLeft = ()=>{
    this.setState({
      showAnimationArrow:true,
      finishedAnimationArrow:false
    })
  }
  onAnimationEndArrowLeft = ()=>{
    this.setState({
      showAnimationArrow:false,
      finishedAnimationArrow:true,
      classNameArrowLeft:[]
    })
    this.props.history.goBack();
  }

  /* animation Arrow right */

  startStopAnimationArrowRight = (p)=>{
    const classNameArrowRight = this.state.classNameArrowRight;
    this.setState({
      classNameArrowRight:classNameArrowRight.length ? [] : ['rotateBarTopRight','rotateBarBottomRight', 'translateTextRight', 'translate-burger', 'translate-latest', 'translate-arrow-left'],
      path:p
    })
  }
  onAnimationStartArrowRight = ()=>{
    this.setState({
      showAnimationArrow:true,
      finishedAnimationArrow:false
    })
  }
  onAnimationEndArrowRight = ()=>{
    this.setState({
      showAnimationArrow:false,
      finishedAnimationArrow:true,
      classNameArrowRight:[]
    })
    this.props.history.push(this.state.path);
  }

  render(){
    return(
      <div className="main" style={{ minHeight:'100vh', position:'relative' }}>
      <AsideLeftWithRouter
      startStopAnimationArrowLeft = { this.startStopAnimationArrowLeft }
      classNameArrowLeft = { this.state.classNameArrowLeft }
      classNameArrowRight = { this.state.classNameArrowRight }
      onAnimationStart = { this.onAnimationStartArrowLeft }
      onAnimationEnd = { this.onAnimationEndArrowLeft }
      />
        <div className="page">
          <Switch>
            <Route path="/about" component={PageAbout} />
            <Route path="/portfolio" render={ ()=><Portfolio show={ this.state.show } /> }/>
            <Route path="/labs" render={ ()=><Labs show={ this.state.show } /> }/>
            <Route path="/form-validation" component={FormValidation}/>
            <Route path="/field-array" component={FieldArray}/>
            <Route path="/carousel" component={Carousel} />
            <Route path="/carousel-with-form" component={CarouselWithForm} />
            <Route path="/labs-cube" component={ LabsCube}/>
            <Route path="/progress-animation" component={ProgressAnimation}/>
            <Route path="/socials-animation" component={SocialAnimation}/>
            <Route path="/montre" component={ Montre} />
            <Route path="/arrow-animation" component={ ArrowAnimation} />
            <Route path="/contact" component={Contact}/>
            <Redirect to="/about" />
          </Switch>
        </div>
      <AsideRightWithRouter
        startStopAnimationArrowRight = { this.startStopAnimationArrowRight }
        classNameArrowRight = { this.state.classNameArrowRight }
        classNameArrowLeft = { this.state.classNameArrowLeft }
        onAnimationStart = { this.onAnimationStartArrowRight }
        onAnimationEnd = { this.onAnimationEndArrowRight } 
      />
      <Latest
        classNameArrowLeft={ this.state.classNameArrowLeft }
        classNameArrowRight={ this.state.classNameArrowRight }
      />
      <DropdownMenu
        className = { this.state.className }
        startStopAnimation = { this.startStopAnimationDropdown }
      />  
      <Burger
      startStopAnimation = { this.startStopAnimationDropdown }
      className={ this.state.className }
      classNameArrowLeft={ this.state.classNameArrowLeft }
      classNameArrowRight={ this.state.classNameArrowRight }
      onAnimationStart = { this.onAnimationStartDropdown }
      onAnimationEnd = { this.onAnimationEndDropdown }
      />
    </div>    
    )
  }
}