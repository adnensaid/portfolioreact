import React, { Component } from 'react';
import { Route ,Switch, Redirect} from 'react-router-dom';
import { PageAbout, Portfolio, Labs, Contact, LabsCube, ProgressAnimation, SocialAnimation, Montre, ArrowAnimation, FormValidation, FieldArray, Carousel, CarouselWithForm } from './components'; 
export default class Pages extends Component{
  render(){
    //console.log(this.props);
    return(
      this.props.location.pathname !== '/about' ? (
        <div
        className={ this.props.classNameText+" page" }  
        onAnimationEnd = { this.props.onAnimationEnd }
        style={{ background:'black'}}>
          <Switch>
            <Route path="/about" component={PageAbout} />
            <Route path="/portfolio" render={ ()=><Portfolio/> }/>
            <Route path="/labs" render={ ()=><Labs/> }/>
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
      ) : (
        <div 
        className={ this.props.classNameText+" page" } 
        onAnimationEnd = { this.props.onAnimationEnd } 
        >
        <Switch>
          <Route path="/about" component={PageAbout} />
          <Route path="/portfolio" render={ ()=><Portfolio show={ this.props.show } /> }/>
          <Route path="/labs" render={ ()=><Labs show={ this.props.show } /> }/>
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
      )

    )
  }
}
