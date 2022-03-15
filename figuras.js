



//código del CUADRADO
console.group('Cuadrados');


function perimetroCuadrado(lado){
  return lado * 4;
}

function areaCuadrado(lado){
  return lado * lado;
}

console.groupEnd();


//código del TRIÁNGULO-------------------------------------
console.group('Triángulos');


function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

console.groupEnd();



//Código del CÍRCULO---------------------------------------------

console.group('Círculos');

//Radio
// const radioCirculo = 4;


//Diámetro
function diametroCirculo(radio){
  return radio * 2;
}


//PI
const PI = Math.PI;


//Perímetro o circunferencia:
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}


//Área

function areaCirculo(radio){
  return (radio * radio) * PI;
}

console.groupEnd();


//Acá interactuamos con HTML - Cuadrado---------------------------------
function calcularPerimetroCuadrado(){
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Acá interactuamos con HTML - Triángulo-------------------------------
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById('InputTriangulo1');
  const value1 = Number(input1.value);

  const input2 = document.getElementById('InputTriangulo2');
  const value2 = Number(input2.value);

  const base = document.getElementById('InputBaseTriangulo');
  const value3 = Number(base.value);


  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert("El perimetro del triangulo es: " + perimetro);
}
