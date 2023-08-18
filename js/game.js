let altura = 0
let largura = 0
function ajustarTelaGame(){
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustarTelaGame()

function posicaoRandomica(){

  // remover mosca da tela
  if(document.getElementById('mosca')){
    document.getElementById('mosca').remove()
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90
  let posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  let mosca = document.createElement('img')
  mosca.src = "/img/mosca.png"
  mosca.className = tamanhoRandomico() + ' ' + ladoRandomico()
  mosca.style.left = posicaoX + 'px'
  mosca.style.top = posicaoY + 'px'
  mosca.style.position = 'absolute'
  mosca.id = 'mosca'
  document.body.appendChild(mosca)

}

function tamanhoRandomico(){
  let classe = Math.floor(Math.random()*3)

  switch (classe){
    case 0:
      return 'mosca1'
    case 1:
      return 'mosca2'
    case 2:
      return 'mosca3'
  }
}

function ladoRandomico(){
  let classe = Math.floor(Math.random()*2)

  switch (classe){
    case 0:
      return 'ladoA'
    case 1:
    return 'ladoB'
  }
}

