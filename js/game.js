let altura = 0
let largura = 0
function ajustarTelaGame(){
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustarTelaGame()

function posicaoRandomica(){
  let posicaoX = Math.floor(Math.random() * largura) - 90
  let posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  let mosca = document.createElement('img')
  mosca.src = "/img/mosca.png"
  mosca.className = 'mosca1'
  mosca.style.left = posicaoX + 'px'
  mosca.style.top = posicaoY + 'px'
  mosca.style.position = 'absolute'

  document.body.appendChild(mosca)
}


