function tocaSom(idAudio) {
  const elemento = document.querySelector(idAudio);
  
  if (elemento != null && elemento.localName == 'audio') {
    elemento.play();
  } else {
    console.error('Elemento não encontrado ou seletor inválido');
  }
}

// function tocaSomClap() {
//   document.querySelector("#som_tecla_clap").play();
// }


const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++){
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  
  tecla.onclick = function (){
    tocaSom(idAudio);
  }
  
  tecla.onkeydown = function (evento){
    if (evento.code == 'Space' || evento.code == 'Enter') {
      tecla.classList.add('ativa');
    }
    
  }
  
  console.log(contador);
}