export default function contact() {
  const component = document.createElement('div')
  component.classList.add('contact')

  const div1 = document.createElement('div')
  div1.textContent = 'Contact us'
  component.appendChild(div1)

  const div2 = document.createElement('div')
  div2.textContent = 'Reach to us'
  component.appendChild(div2)

  const div3 = document.createElement('div')
  const btn1 = document.createElement('button')
  btn1.type = 'button'
  btn1.textContent = 'Click here'
  div3.appendChild(btn1)
  component.appendChild(div3)

  return component
}