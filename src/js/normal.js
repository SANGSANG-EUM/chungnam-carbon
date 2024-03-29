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

  //관련 이미지 슬라이드
  const relImgSlideTarget = '.rel_img_sl .swiper-container';
  const relImgSlideOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
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
    breakpoints: {
      481: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1291: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1441: {
        spaceBetween: 40,
        slidesPerView: 4,
      }
    }
  };
  const relImgSlider = f.slider(relImgSlideTarget, relImgSlideOptions);

  //모바일 햄버거 메뉴
  function moMemu () {
    let windowWidth = $( window ).width();
    let hasChild = 0;
    const moHamBtn = $(".header-ham");
    const moHamGnb = $(".gnb");

    moHamBtn.on('click', function(){
      if($(this).hasClass("on")) {
        $(this).removeClass("on");
        moHamGnb.fadeOut(100).css("right","-100%");
      } else {
        $(this).addClass("on");
        moHamGnb.fadeIn(100).css("right","0");
      }
    });
    
    if(windowWidth <= 1023) {
      moHamGnb.find(".dp2").each(function(){
        hasChild = $(this).length;
        
        if(hasChild > 0) {
          let orginLink = $(this).siblings("a").attr("href");
          
          $(this).siblings("a").attr({
            "data-link": orginLink,
            "href": "javascript:void(0)"
          });
          $(this).siblings("a").on('click', function(){
            $(this).siblings(".dp2").slideToggle(200);
          })
        }
      })
    }
  }

  moMemu()
});