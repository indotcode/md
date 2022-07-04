(() => {
  const categoryAdd = document.querySelector('.category__add')
  if(categoryAdd){
    categoryAdd.addEventListener('click', (event) => {
      document.querySelectorAll('.category__item').forEach((element) => {
        if(!element.classList.contains('category__item--active')){
          element.classList.add('category__item--active')
        }
      })
      event.currentTarget.remove()
    })
  }
})()