import Splide from '@splidejs/splide';

(() => {
  let options = {}

  if(document.querySelector('.splide--carousel')){
    options = {
      arrows: false,
      perPage: 3,
      gap: 20,
      breakpoints: {
        1000: { perPage: 2 },
        640 : { perPage: 1 },
      },
    }
  }

  if(document.querySelector('.splide--about')){
    options = {
      arrows: true,
      type : 'loop',
      autoplay: true,
      interval: 8000,
      gap: 20,
      arrowPath: "M2.14948e-05 44.2874C2.10436e-05 49.4478 6.18241 52.0945 9.91642 48.5327L29.19 30.148C32.0812 27.3901 32.0812 22.7755 29.19 20.0176L9.91642 1.63293C6.18241 -1.92888 2.33964e-05 0.717832 2.29453e-05 5.8782C2.2805e-05 7.48223 0.656774 9.01632 1.81744 10.1235L12.19 20.0177C15.0812 22.7756 15.0812 27.3901 12.19 30.148L1.81744 40.0422C0.656773 41.1493 2.1635e-05 42.6834 2.14948e-05 44.2874Z"
    }
  }

  new Splide( '.splide', options).mount();
})()