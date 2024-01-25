'use strict'

import * as f from './function.js';

$(document).ready(function () {
  // Match Height
  $(".match_h > *").matchHeight();

  //Main Visual Slide
  const mainVisualTarget = '.main-visual .swiper-container';
  const mainVisualOptions = {
    slidesPerView: 1,
    loop: false,
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000,
    centeredSlides: true,
    pagination: {
      el: `${mainVisualTarget} .pagination`,
      type: 'fraction',
    },
  };
  const mainVisualSlider = f.slider(mainVisualTarget, mainVisualOptions);
});