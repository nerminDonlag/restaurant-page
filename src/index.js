(function component() {
  const navHome = document.querySelector('.navHome')
  const navMenu = document.querySelector('.navMenu')
  const navContact = document.querySelector('.navContact')
  const home = document.querySelector('.home')
  const menu = document.querySelector('.menu')
  const contact = document.querySelector('.contact')
  navHome.addEventListener('click', () => {
    menu.style.display = 'none'
    contact.style.display = 'none'
    home.style.display = 'flex'
  })
  navMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    contact.style.display = 'none'
    home.style.display = 'none'
  })
  navContact.addEventListener('click', () => {
    menu.style.display = 'none'
    contact.style.display = 'flex'
    home.style.display = 'none'
  })
})()