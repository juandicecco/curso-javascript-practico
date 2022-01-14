// Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulo3 = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   "Los lados del Triangulo miden: " +
//     ladoTriangulo1 +
//     " cm, " +
//     ladoTriangulo2 +
//     " cm, " +
//     ladoTriangulo3 +
//     " cm"
// );

// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El area del Triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

//Radio

// const radioCirculo = 4;

// console.log("El radio del Circulo es: " + radioCirculo + " cm");

//Diametro

function diametroCirculo(radio) {
  return radio * 2;
}

// console.log("El diametro del Circulo es: " + diametroCirculo + " cm");

//Pi

const PI = Math.PI;

//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// console.log("El perimetro del Circulo es: " + perimetroCirculo + " cm");

//Area

function areaCirculo(radio) {
  return radio * radio * PI;
}

// console.log("El area del Circulo es: " + areaCirculo + " cm^2");

console.groupEnd();

//Aqui interactuamos con el html

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = input1.value;
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = input2.value;
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = input3.value;

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("InputTriangulo1");
  const value = input.value;

  const area = areaTriangulo(value);
  alert(area);
}
