const PerimetroDelCuadrado = (LadoDelCuadrado) => LadoDelCuadrado * 4;
const AreaDelCuadrado = (LadoDelCuadrado) => LadoDelCuadrado * LadoDelCuadrado;

const calcularAreaCuadrado = () => {
  const LadoDelCuadrado = document.querySelector("#lado-cuadrado").value;
  const resultado = AreaDelCuadrado(LadoDelCuadrado);
  document.querySelector("#resultado").innerHTML = resultado + " cm";
};

const calcularPerimetroCuadrado = () => {
  const LadoDelCuadrado = document.querySelector("#lado-cuadrado").value;
  const resultado = PerimetroDelCuadrado(LadoDelCuadrado);
  document.querySelector("#resultado").innerHTML = resultado + " cm";
};

// Calculo del Circulo

const PerimetroDelCirculo = (radio) => (2*Math.PI*radio).toFixed(3);
const AreaDelCirculo = (radio)=> (Math.PI*Math.pow(radio,2)).toFixed(3);

const CalculoAreaCirculoculo = ()=> {
    const radio = document.querySelector("#radio-circulo").value;
    const resultado = AreaDelCirculo(radio);
    document.querySelector("#resultado").innerHTML=resultado + " cm";
}

const CalculoPerimetroCirculo = ()=> {
    const radio = document.querySelector("#radio-circulo").value;
    const resultado = PerimetroDelCirculo(radio);
    document.querySelector("#resultado").innerHTML=resultado + " cm";
}

//Calculo del Hexagono

const AreaDelHexagono = (LadoDelHexagono) => (((3*Math.sqrt(3))*Math.pow(LadoDelHexagono,2))/2).toFixed(4);
const PerimetroDelHexagono= (LadoDelHexagono) => LadoDelHexagono * 6;

const calcularAreaHexagono = () => {
  const LadoDelHexagono = document.querySelector("#lado-hexagono").value;
  const resultado = AreaDelHexagono(LadoDelHexagono);
  document.querySelector("#resultado").innerHTML = resultado + " cm";
};

const calcularPerimetroHexagono = () => {
  const LadoDelHexagono = document.querySelector("#lado-hexagono").value;
  const resultado = PerimetroDelHexagono(LadoDelHexagono);
  document.querySelector("#resultado").innerHTML = resultado + " cm";
};

//Calculo del Rectangulo

const AreaDelRectangulo = (base,altura) => base*altura;
const PerimetroDelRectangulo= (base,altura) => 2*base+2*altura;

const calcularAreaRectangulo = () => {
  const basedelrectangulo = document.querySelector("#base-rectangulo").value;
  const alturadelrectangulo = document.querySelector("#altura-rectangulo").value;
  const resultado = AreaDelRectangulo(basedelrectangulo,alturadelrectangulo);
  document.querySelector("#resultado-area").innerHTML = resultado + " cm";
};

const calcularPerimetroRectangulo = () => {
  const basedelrectangulo = document.querySelector("#base-rectangulo").value;
  const alturadelrectangulo = document.querySelector("#altura-rectangulo").value;
  const resultado = PerimetroDelRectangulo(basedelrectangulo,alturadelrectangulo);
  document.querySelector("#resultado-perimetro").innerHTML = resultado + " cm";
};

// Triangulo

const perimetroDelTriangulo = (ladoDelTriangulo) => ladoDelTriangulo * ladoDelTriangulo * ladoDelTriangulo;
const areaDelTriangulo = (baseDelTriangulo,alturaDelTriangulo) => (baseDelTriangulo * alturaDelTriangulo)/2;

var calcularAreaTriangulo = () => {

    const baseDelTriangulo = document.querySelector("#base-triangulo").value;
    const alturaDelTriangulo = document.querySelector("#altura-triangulo").value;
    const resultado = areaDelTriangulo(baseDelTriangulo,alturaDelTriangulo)
    document.querySelector("#resultado").innerHTML = resultado
}
var calcularPerimetroTriangulo = () => {

    const ladoDelTriangulo = document.querySelector("#lado-triangulo").value;
    const resultado = perimetroDelTriangulo(ladoDelTriangulo)
    document.querySelector("#resultado-dos").innerHTML = resultado
}

// Romboide

const areaDelRomboide = (baseDelRomboide, alturaDelRomboide) =>
  baseDelRomboide * alturaDelRomboide;
const perimetroDelRomboide = (baseDelRomboide, ladoDelRomboide) =>
  ladoDelRomboide * ladoDelRomboide + baseDelRomboide * baseDelRomboide;

var calcularAreaRomboide = () => {
  const altDR = document.querySelector("#altura-romboide").value;
  const baseDR = document.querySelector("#base-romboide").value;

  const resultado = areaDelRomboide(altDR, baseDR);
  document.querySelector("#resultado").innerHTML = resultado;
};
var calcularPerimetroRomboide = () => {
  const ladoDR = document.querySelector("#lado-romboide").value;
  const baseDR = document.querySelector("#base-romboide").value;
  const resultado = perimetroDelRomboide(ladoDR, baseDR);
  document.querySelector("#resultado").innerHTML = resultado;
};