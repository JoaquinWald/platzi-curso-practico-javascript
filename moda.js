const lista1 = [1,2,3,1,2,3,4,2,2,2,1,];

const lista1Count = {};

lista1.map(
  function(elemento){
    if(lista1Count[elemento]){
      lista1Count[elemento] += 1;
    }	else{
      lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(

  function(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
  }

);

const moda = lista1Array[lista1Array.length - 1];



//---------------------- Transformado a function -------------------


function calcularModa(lista1){

  // const lista1 = [1,2,3,1,2,3,4,2,2,2,1,]; ----> borramos el array de elementos para q sea el user quien los ponga
  // mediante llamar a la function -> calcularModa([2,3,2,12,2,34,2,2,2,2]); entre () y [].

  const lista1Count = {};

  lista1.map(
    function(elemento){
      if(lista1Count[elemento]){
        lista1Count[elemento] += 1;
      }	else{
        lista1Count[elemento] = 1;
      }
    }
  );

  const lista1Array = Object.entries(lista1Count).sort(

    function(valorAcumulado, nuevoValor){
      return valorAcumulado[1] - nuevoValor[1];
    }

  );

  const moda = lista1Array[lista1Array.length - 1];

  return moda;

}
