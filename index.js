const navList = Array.from(document.querySelectorAll('.nav-button'))
const contentList = Array.from(document.querySelectorAll('.content-container'))

const clearActiveClass = (element) => {
  element.find(item => item.classList.remove('selected'))
}

const setActiveClass = (element, index) => {
  element[index].classList.add('selected')
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('selected')) return
  
    clearActiveClass(navList)
    clearActiveClass(contentList)
    
    setActiveClass(navList, index)
    setActiveClass(contentList, index)
  })
}

navList.forEach(checkoutTabs)