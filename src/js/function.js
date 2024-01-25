'use stict'

export const slider = function(t, opt) {
  if(document.querySelectorAll(t).length > 0){
    const options = opt;
    const swiper = new Swiper(t, options);
    const el = document.querySelector(t);

    return {
      el: el,
      swiper: swiper
    }
  }
}