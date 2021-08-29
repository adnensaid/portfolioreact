import React from 'react';
//import { action } from '@storybook/addon-actions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
//import { boolean, number, text } from '@storybook/addon-knobs';
import img from '../../../../assets/images/team.jpg';
import imgSubmitPrev from '../../../../assets/images/carousel/submit.png';
import imgSubmitNext from '../../../../assets/images/carousel/submit2.png';

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
      <img src={img} alt='img' />
      <p className="legend">Legend {index}</p>
  </div>
);
const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;
//const tooglesGroupId = 'Toggles';
//const valuesGroupId = 'Values';

/* const getConfigurableProps = () => ({
    showArrows: boolean('showArrows', true, tooglesGroupId),
    showStatus: boolean('showStatus', true, tooglesGroupId),
    showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', false, tooglesGroupId),
    showThumbs: boolean('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', false, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    swipeable: boolean('swipeable', false, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    autoFocus: boolean('autoFocus', false, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 2000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 500, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    ariaLabel: text('ariaLabel', undefined)
}); */

const withCustomStatusArrowsAndIndicators = () => {

  const arrowStyles= {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 60,
      cursor: 'pointer',
      border:0,
  };

  const indicatorStyles = {
      background: '#fff',
      width: 6,
      height: 6,
      display: 'inline-block',
      margin: '0 8px',
  };

  return (
      <Carousel
          statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                  <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                      <img src={imgSubmitPrev} alt="img" />
                  </button>
              )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                  <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                      <img src={imgSubmitNext} alt="img" />    
                  </button>
              )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                  return (
                      <li
                          style={{ ...indicatorStyles, background: 'red' }}
                          aria-label={`Selected: ${label} ${index + 1}`}
                          title={`Selected: ${label} ${index + 1}`}
                      />
                  );
              }
              return (
                  <li
                      style={indicatorStyles}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                  />
              );
          }}
      >
          {baseChildren.props.children}
      </Carousel>
  );
};
//export default fade;
//export default noImages;
export default withCustomStatusArrowsAndIndicators;