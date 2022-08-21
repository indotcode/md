(() => {
  const writeJs = document.querySelector('.write--js')
  if(writeJs){
    const writeSelectBlock =  writeJs.querySelector('.write__select_block')
    const writeSelectList =  writeJs.querySelector('.write__select_list')
    const writeSelectName =  writeJs.querySelector('.write__select_name')
    writeSelectBlock.addEventListener('click', (event) => {
      const elem = event.currentTarget
      if(elem.classList.contains('write__select_block--active')){
        elem.classList.remove('write__select_block--active')
        writeSelectList.classList.remove('write__select_list--active')
      } else {
        elem.classList.add('write__select_block--active')
        writeSelectList.classList.add('write__select_list--active')
      }
    })
    const input = writeJs.querySelector('.write__select_input')
    writeSelectList.querySelectorAll('div').forEach((element) => {
      element.addEventListener('click', (event) => {
        const elem = event.currentTarget
        input.value = elem.innerHTML
        writeSelectBlock.classList.remove('write__select_block--active')
        writeSelectList.classList.remove('write__select_list--active')
        writeSelectName.innerHTML = elem.innerHTML
      })
    })

    document.addEventListener('click', function(event) {
      if (!writeJs.contains(event.target)){
        writeSelectBlock.classList.remove('write__select_block--active')
        writeSelectList.classList.remove('write__select_list--active')
      }
    });
  }
})()