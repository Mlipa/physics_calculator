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