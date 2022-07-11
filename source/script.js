import "./style.scss";

import "./components/burger/burger.js"

import "./components/menu/menu_mobile.js"

import "./components/gallery/gallery.js"

import "./components/header/header_fixed.js"

import "./components/category/category.js"

import "./components/option/option_catalog__sort_select"

import Splide from '@splidejs/splide';

new Splide( '.splide', {
  arrows: false,
  perPage: 3,
  gap: 20,
  breakpoints: {
    1000: { perPage: 2 },
    640 : { perPage: 1 },
  },
} ).mount();