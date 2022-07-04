(() => {
  const headerFixed = document.querySelector('.header_fixed')
  if(headerFixed){
    const height = 400
    if(window.pageYOffset >= height){
      headerFixed.classList.add('header_fixed--active')
    }
    window.addEventListener('scroll', function(event) {
      const { pageYOffset } = event.currentTarget;
      if(pageYOffset >= height){
        headerFixed.classList.add('header_fixed--active')
      } else {
        headerFixed.classList.remove('header_fixed--active')
      }
    });
  }
})()