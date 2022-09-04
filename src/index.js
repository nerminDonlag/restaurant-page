(function component() {
  const content = document.getElementById('content')

  const backgroundImage = document.createElement('div')
  backgroundImage.classList.add('background-image')
  const img = document.createElement('img')
  img.src = 'slider-bg-image-1.jpg'
  img.alt = 'food in background'
  backgroundImage.appendChild(img)
  content.appendChild(backgroundImage)

  const nav = document.createElement('nav')
  const navDiv1 = document.createElement('div')
  navDiv1.textContent = 'Home'
  nav.appendChild(navDiv1)
  const navDiv2 = document.createElement('div')
  navDiv2.textContent = 'About us'
  nav.appendChild(navDiv2)
  const navDiv3 = document.createElement('div')
  navDiv3.textContent = 'Offer'
  nav.appendChild(navDiv3)
  const navDiv4 = document.createElement('div')
  navDiv4.textContent = 'Menu'
  nav.appendChild(navDiv4)
  const navDiv5 = document.createElement('div')
  navDiv5.textContent = 'Gallery'
  nav.appendChild(navDiv5)
  const navDiv6 = document.createElement('div')
  navDiv6.textContent = 'Contact'
  nav.appendChild(navDiv6)
  content.appendChild(nav)

  const hero = document.createElement('div')
  hero.classList.add('hero')
  const heroDiv1 = document.createElement('div')
  heroDiv1.textContent = 'Welcome to our'
  hero.appendChild(heroDiv1)
  const heroDiv2 = document.createElement('div')
  heroDiv2.textContent = 'Restaurant'
  hero.appendChild(heroDiv2)
  const heroDiv3 = document.createElement('div')
  heroDiv3.textContent = 'The best multi cuisine restaurant'
  hero.appendChild(heroDiv3)
  const heroDiv4 = document.createElement('div')
  const btn1 = document.createElement('button')
  btn1.type = 'button'
  btn1.textContent = 'Book table'
  heroDiv4.appendChild(btn1)
  const btn2 = document.createElement('button')
  btn2.type = 'button'
  btn2.textContent = 'View Menu'
  heroDiv4.appendChild(btn2)
  hero.appendChild(heroDiv4)
  content.appendChild(hero)
})()