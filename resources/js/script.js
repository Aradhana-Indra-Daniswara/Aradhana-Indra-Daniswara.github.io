
let alterable = ['linkedin', 'instagram', 'github', 'spotify']
let alterableColor = ['#0A66C2', '#D43377', '#000000', '#1DB954']

let socialClickables = document.querySelectorAll('.clickables')

const searchColor = (id) => {
  return alterableColor[alterable.indexOf(id)]
}

const onChangeAlt = (event) => {
  let target = event.currentTarget


  target.querySelector('#logo').style.display = 'none'
  target.querySelector('#alt').style.display = 'block'


  target.querySelector('p').style.color = searchColor(target.id)
  target.style.backgroundColor = 'white'

}

const offChangeAlt = (event) => {
  let target = event.currentTarget

  target.querySelector('#logo').style.display = 'block'
  target.querySelector('#alt').style.display = 'none'


  target.querySelector('p').style.color = 'white'
  target.style.backgroundColor = searchColor(target.id)

}

socialClickables.forEach(function (i) {
  i.addEventListener('mousedown', onChangeAlt)
  i.addEventListener('mouseup', offChangeAlt)
})