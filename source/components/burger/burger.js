(() => {
  const burger = document.querySelector('.burger-js')
  if(burger){
    burger.addEventListener('click', (event) => {
      const menuMobile = document.querySelector('.burger-js--menu_mobile')
      const elementBurger = event.currentTarget
      if(elementBurger.classList.contains('burger--active')){
        elementBurger.classList.remove('burger--active')
        menuMobile.classList.remove('menu_mobile--active')
      } else {
        elementBurger.classList.add('burger--active')
        menuMobile.classList.add('menu_mobile--active')
      }
    })
  }
})()