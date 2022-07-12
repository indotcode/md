import Splide from '@splidejs/splide';

(() => {
  if(document.querySelector('.splide')){
    new Splide( '.splide', {
      arrows: false,
      perPage: 3,
      gap: 20,
      breakpoints: {
        1000: { perPage: 2 },
        640 : { perPage: 1 },
      },
    } ).mount();
  }
})()