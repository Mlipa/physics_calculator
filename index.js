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
