function createRandomData (length = 40) {
  return Array.from({ length }).map(() => Math.floor(Math.random() * 100))
}

function resetBackgroud() {
  $('.bar').css('background', '#5050F5')
}

function setActualPosition(position) {
  $('.bar').eq(position).css('background', 'red')
}

function mkBar (size) {
  return `<div class="bar" style="height: ${size * 2}px; margin-top: ${140 - size * 2}px;">${size}</div>`
}

function bar(data) {
  document.querySelector('.target').innerHTML = ''

  for (let i = 0; i < data.length; i++) {
    $('.target').append(mkBar(data[i]));
  }
  search(data, Math.floor(Math.random() * 50))
}

document.querySelector('button').addEventListener('click', () => {
  start()
})

function search(data, position) {
  resetBackgroud()
  setActualPosition(position)

  setTimeout(function () {
    if (data?.[position + 1] > data[position]) {
      position++
      search(data, position)
    }
    else if (data?.[position - 1] > data[position]) {
      position--
      search(data, position)
    }
    else {
      const random = Math.floor(Math.random() * data.length - 1) + 1
      search(data, random)
    }
  }, 1000)
}

function start () {
  bar(createRandomData())
}

start()
