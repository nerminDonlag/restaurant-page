export default function menu() {
  const component = document.createElement('div')
  component.classList.add('menu')

  const div1 = document.createElement('div')
  div1.textContent = 'Yummy n testy'
  component.appendChild(div1)

  const div2 = document.createElement('div')
  div2.textContent = 'Delicious Menu'
  component.appendChild(div2)

  const div3 = document.createElement('div')
  const btn1 = document.createElement('button')
  btn1.type = 'button'
  btn1.textContent = 'Snacks'
  div3.appendChild(btn1)
  const btn2 = document.createElement('button')
  btn2.type = 'button'
  btn2.textContent = 'Desert'
  div3.appendChild(btn2)
  const btn3 = document.createElement('button')
  btn3.type = 'button'
  btn3.textContent = 'Dinner'
  div3.appendChild(btn3)
  const btn4 = document.createElement('button')
  btn4.type = 'button'
  btn4.textContent = 'Freshfood'
  div3.appendChild(btn4)
  component.appendChild(div3)

  return component
}