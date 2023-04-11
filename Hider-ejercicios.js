// 1. Si es un numero par o impar

// function parOimpar() {
//   let numero = prompt("Digita un numero para saber si es par o impar: ");
//   if (numero % 2 == 0) {
//     return alert("el numero " + numero + " es par");
//   } else {
//     return alert("el numero " + numero + " es impar");
//   }
// }
// parOimpar();







// 2. Si el numero es primo o no es primo

// function esPrimo(numero) {
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       return false;
//     }
//   }
//   return numero !== 1;
// }
// let numero = prompt("Escribe un número para saber si es primo o no ");
// if (esPrimo(numero)) {
//   alert("El número " + numero + " es primo");
// } else {
//   alert("El número " + numero + " no es primo");
// }







// 3. Una función que dado el numero me indique el siguiente numero primo

// function esPrimo(numero) {
//     for (let i = 2; i < numero; i++) {
//       if (numero % i === 0) {
//         return false;
//       }
//     }
//     return numero !== 1;
//   }
  
//   function siguientePrimo() {
//     let numero = parseInt(prompt("Ingresa un número para saber el siguiente numero primo"));
//     let i = numero + 1;
//     while (!esPrimo(i)) {
//       i++;
//     }
//     alert(`El siguiente número primo al número ${numero} es ${i}`);
//   } 
//   siguientePrimo();







  // 4. Una función que imprima el cuadrado  de n x n

//   function cuadradoNxN() {
//     let n = parseInt(prompt("Ingresa un número para saber su cuadrado"));
//     let resultado = n * n;
//     alert(`El cuadrado de ${n} es ${resultado}`);
//   }
//   cuadradoNxN();


// function figuraCuadradaNxN() {
//     let n = parseInt(prompt("Ingresa un número del tamaño del cuadrado: "));
//     let resultado = "";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         resultado += "*";
//       }
//       resultado += "\n";
//     }
//     alert(resultado);
//   }
//   figuraCuadradaNxN();








// 5. (Avanzado) una función que me permita seleccionar cual de los ejercicios quiero hacer


  function seleccionarFuncion() {
    let opcion = parseInt(prompt("Selecciona una función:\n1 - parOimpar\n2 - esPrimo \n3 - siguientePrimo \n4 - figuraCuadradaNxN"));
    switch (opcion) {
      case 1:
        function parOimpar() {
            let numero = prompt("Digita un numero para saber si es par o impar: ");
            if (numero % 2 == 0) {
              return alert("el numero " + numero + " es par");
            } else {
              return alert("el numero " + numero + " es impar");
            }
          }
          parOimpar();
        break;
      case 2:
        function esPrimo(numero) {
            for (let i = 2; i < numero; i++) {
              if (numero % i === 0) {
                return false;
              }
            }
            return numero !== 1;
          }
          let numero = prompt("Escribe un número para saber si es primo o no ");
          if (esPrimo(numero)) {
            alert("El número " + numero + " es primo");
          } else {
            alert("El número " + numero + " no es primo");
          }
        break;
      case 3:
        function esPrimo(numero) {
            for (let i = 2; i < numero; i++) {
              if (numero % i === 0) {
                return false;
              }
            }
            return numero !== 1;
          }
          function siguientePrimo() {
            let numero = parseInt(prompt("Ingresa un número para saber el siguiente numero primo"));
            let i = numero + 1;
            while (!esPrimo(i)) {
              i++;
            }
            alert(`El siguiente número primo al número ${numero} es ${i}`);
          } 
          siguientePrimo();
        break;
      case 4:
        function figuraCuadradaNxN() {
            let n = parseInt(prompt("Ingresa un número del tamaño del cuadrado: "));
            let resultado = "";
            for (let i = 0; i < n; i++) {
              for (let j = 0; j < n; j++) {
                resultado += "*";
              }
              resultado += "\n";
            }
            alert(resultado);
          }
          figuraCuadradaNxN();
        break;
      default:
        alert("Opción inválida");
        break;
    }
  }
  seleccionarFuncion();