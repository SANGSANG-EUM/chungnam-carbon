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

  const relImgSlideTarget = '.rel_img_sl .swiper-container';
  const relImgSlideOptions = {
    spaceBetween: 40,
    slidesPerView: 4,
    watchSlidesProgress: true,
    loop: false,
    centeredSlides: false,
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    navigation: {
      nextEl: ".rel_img_slide_btn_box .next",
      prevEl: ".rel_img_slide_btn_box .prev",
    },
  };
  const relImgSlider = f.slider(relImgSlideTarget, relImgSlideOptions);
});