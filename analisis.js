//nos devuelve el slario de cada persona
const salariosCol = colombia.map(

  function(personita){
    return personita.salary;
  }

);

//nos orneda de menor a mayor los salarios
const salariosColSorted = salariosCol.sort(

  function(salaryA, salaryB){
    return salaryA - salaryB;
  }

);


//vemos si es PAR o IMPAR para poder sacar la MEDIANA
function esPar(numerito){
	return (numerito % 2 === 0);
};


//copiamos la function de mediana.js para sacar el promedio
function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}


//calculamos la MEDIANA
function medianaSalarios(lista){

  const mitad = parseInt(lista.length / 2);

  if(esPar(lista.length)){
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  }else{
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }

};


//Llamamos a la function medianaSalarios() con el argumento salariosColSorted
console.log(
  medianaSalarios(salariosColSorted)
);