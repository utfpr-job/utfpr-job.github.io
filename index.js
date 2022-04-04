const dataSet = []
for (let i = 0; i < 50; i ++) {
  dataSet.push(Math.floor(Math.random() * 100))
}

const mkBar = (size) => `<div class="bar" style="height: ${size * 2}px; margin-top: ${140 - size * 2}px;"></div>`

for (let i = 0; i < dataSet.length; i++) {
  $('.target').append(mkBar(dataSet[i]));
}

function resetBackgroud() {
  $('.bar').css('background', '#5050F5')
}

function setActualPosition(position) {
  $('.bar').eq(position).css('background', 'red')
}

function search(position) {
  resetBackgroud()
  setActualPosition(position)

  setTimeout(function () {
    if (dataSet?.[position + 1] > dataSet[position]) {
      position++
      search(position)
    }
    else if (dataSet?.[position - 1] > dataSet[position]) {
      position--
      search(position)
    }
    else {
      const random = Math.floor(Math.random() * dataSet.length - 1) + 1
      search(random)
    }
  }, 500)
}

search(Math.floor(Math.random() * 50))