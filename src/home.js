export default function home() {
  const component = document.createElement('div')
  component.classList.add('home')

  const div1 = document.createElement('div')
  div1.textContent = 'Welcome to our'
  component.appendChild(div1)

  const div2 = document.createElement('div')
  div2.textContent = 'Restaurant'
  component.appendChild(div2)

  const div3 = document.createElement('div')
  div3.textContent = 'The best multi cuisine restaurant'
  component.appendChild(div3)

  const div4 = document.createElement('div')
  const btn1 = document.createElement('button')
  btn1.type = 'button'
  btn1.textContent = 'Book table'
  div4.appendChild(btn1)
  const btn2 = document.createElement('button')
  btn2.type = 'button'
  btn2.textContent = 'View Menu'
  div4.appendChild(btn2)
  component.appendChild(div4)

  return component
}