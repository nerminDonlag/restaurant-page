import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
import './style.css'

(() => {
  const content = document.getElementById('content')
  //on load
  content.appendChild(home())

  const navHome = document.querySelector('.navHome')
  const navMenu = document.querySelector('.navMenu')
  const navContact = document.querySelector('.navContact')

  navHome.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(home())
  })
  navMenu.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(menu())
  })
  navContact.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(contact())
  })
})()