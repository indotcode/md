(() => {
  const menuMobile = document.querySelectorAll('.menu_mobile-js')
  if(menuMobile.length !== 0){
    menuMobile.forEach((element) => {
      element.addEventListener('click', (event) => {
        const elementClick = event.target
        const menuMobileUl = elementClick.closest('.menu_mobile__item').querySelector('.menu_mobile-js--ul')
        if(elementClick.classList.contains('menu_mobile__title--active')){
          elementClick.classList.remove('menu_mobile__title--active')
          menuMobileUl.classList.remove('menu_mobile__ul--active')
        } else {
          removeAll()
          elementClick.classList.add('menu_mobile__title--active')
          menuMobileUl.classList.add('menu_mobile__ul--active')
        }
      })
    })

    function removeAll(){
      document.querySelectorAll('.menu_mobile-js').forEach((element) => {
        element.classList.remove('menu_mobile__title--active')
      })
      document.querySelectorAll('.menu_mobile-js--ul').forEach((element) => {
        element.classList.remove('menu_mobile__ul--active')
      })
    }
  }
})()