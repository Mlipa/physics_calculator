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

