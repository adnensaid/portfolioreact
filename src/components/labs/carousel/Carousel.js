import React, { Component } from 'react';
export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }
  onNextClick() {
    if(this.state.activeIndex < 4){
      this.setState({activeIndex: this.state.activeIndex + 1});
    } else {
      this.setState({activeIndex: 0})
    } 
  }
  
    onPrevClick() {
      if(this.state.activeIndex > 0) {
        this.setState({activeIndex: this.state.activeIndex - 1});
      } else {
        this.setState({activeIndex: 4})
      }
  }
  render() {

    return (
      <div className='container-carousel'>
        <button onClick={this.onPrevClick}>◀</button>
        <ol className='slide-container' > 
          {[1,2,3,4,5].map((item, index) => {
            let computedClass = index === (this.state.activeIndex) ? 'slide active' : 'slide';
            return <li className={computedClass} key={index}>{item}</li>
          })}
        </ol>
        <button onClick={this.onNextClick}>▶</button>
    </div>
    );
  }
}