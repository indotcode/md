(() => {
  const optionCatalogSortSelect = document.querySelector('.option_catalog__sort_select--js')
  if(optionCatalogSortSelect){
    const optionCatalogSortBlock =  optionCatalogSortSelect.querySelector('.option_catalog__sort_block')
    const optionCatalogSortList =  optionCatalogSortSelect.querySelector('.option_catalog__sort_list')
    optionCatalogSortBlock.addEventListener('click', (event) => {
      const elem = event.currentTarget
      if(elem.classList.contains('option_catalog__sort_block--active')){
        elem.classList.remove('option_catalog__sort_block--active')
        optionCatalogSortList.classList.remove('option_catalog__sort_list--active')
      } else {
        elem.classList.add('option_catalog__sort_block--active')
        optionCatalogSortList.classList.add('option_catalog__sort_list--active')
      }
    })
  }
})()