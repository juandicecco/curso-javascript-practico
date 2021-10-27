// Codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log(
  "Los lados del Triangulo miden: " +
    ladoTriangulo1 +
    " cm, " +
    ladoTriangulo2 +
    " cm, " +
    ladoTriangulo3 +
    " cm"
);

console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

//Radio

const radioCirculo = 4;

console.log("El radio del Circulo es: " + radioCirculo + " cm");

//Diametro

const diametroCirculo = radioCirculo * 2;

console.log("El diametro del Circulo es: " + diametroCirculo + " cm");

//Pi

const PI = Math.PI;

//Circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log("El perimetro del Circulo es: " + perimetroCirculo + " cm");

//Area

const areaCirculo = radioCirculo * radioCirculo * PI;

console.log("El area del Circulo es: " + areaCirculo + " cm^2");

console.groupEnd();
