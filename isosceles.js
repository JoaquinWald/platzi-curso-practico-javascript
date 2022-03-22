function alturaTriangulo(base,lado){
  return (Math.sqrt(lado * lado - (base * base / 4)));
}


function calcularAlturaIsosceles(){
  const input1 = document.getElementById('InputBaseIsosceles');
  const value1 = Number(input1.value);

  const input2 = document.getElementById('InputLadosIsosceles');
  const value2 = Number(input2.value);


  const altura = alturaTriangulo(value1,value2);
  alert('La altura del triángulo isosceles es:' + ' ' + altura);
}