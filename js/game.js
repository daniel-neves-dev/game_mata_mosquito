let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

// Define tempo de mosca na tela
let moscaTempo = 1500
let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
  moscaTempo = 1500
} else if (nivel === 'dificil') {
  moscaTempo = 1000
} else if (nivel === 'chucknorris') {
  moscaTempo = 750
}

function ajustarTelaGame() {
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustarTelaGame()

// tempo de jogo
let cronometro = setInterval(function () {
  tempo -= 1
  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosca)
    window.location.href = "vitoria.html"
  } else {
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

function posicaoRandomica() {
  // remover
  if (document.getElementById('mosca')) {
    document.getElementById('mosca').remove()

    if (vidas > 3) {
      window.location.href = 'game_over.html'
    } else {
      document.getElementById('v' + vidas).src = '/img/coracao_vazio.png'
      vidas++
    }
  }

  //posicao da mosca dentro da tela
  let posicaoX = Math.floor(Math.random() * largura) - 90
  let posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  // cria a mosca na tela
  let mosca = document.createElement('img')
  mosca.src = "/img/mosca.png"
  mosca.className = tamanhoRandomico() + ' ' + ladoRandomico()
  mosca.style.left = posicaoX + 'px'
  mosca.style.top = posicaoY + 'px'
  mosca.style.position = 'absolute'
  mosca.id = 'mosca'

  // mata a mosca
  mosca.onclick = function () {
    this.remove()
  }

  document.body.appendChild(mosca)
}

// muda a mosca de tamanho
function tamanhoRandomico() {
  let classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosca1'
    case 1:
      return 'mosca2'
    case 2:
      return 'mosca3'
  }
}

// vira a mosca de lado
function ladoRandomico() {
  let classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}

