// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura 
// guardiões da galáxia, 12, fantasia,aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu, 14, drama
function setup() {
    createCanvas(400, 400);}
  
  function draw() {
    background(220);
    let idade = 15;
    let recomendacao =geraRecomendaca0(idade);
    text(recomendacao, width/2, height/2);
  } 
  
  function geraRecomendaca0(idade){
    if(idade >= 10){
      return "As aventuras de Pi";
    } else {
      return "A viagem de Chihiro";
    }
  }
  