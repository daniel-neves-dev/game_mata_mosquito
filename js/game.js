let altura = 0
let largura = 0
function ajustarTelaGame(){
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustarTelaGame()

function posicaoRandomica(){
  let posicaoX = Math.floor(Math.random() * largura)
  let posicaoY = Math.floor(Math.random() * altura)

  let mosca = document.createElement('img')
  mosca.src = "/img/mosca.png"
  mosca.className = 'mosca1'

  document.body.appendChild(mosca)
}


