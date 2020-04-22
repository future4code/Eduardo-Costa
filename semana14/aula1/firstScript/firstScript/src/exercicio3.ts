export type carro = {
  marca: string,
  capacidadeCombustivel: number,
  posssuiFlex: boolean,
  quilometroPorLitro: (km: number) => number
};

const chevette: carro = {
  marca: "Chevrolet",
  capacidadeCombustivel: 30,
  posssuiFlex: false,
  quilometroPorLitro: (km: number) => {
    return km * 0.25
  }
}

const litros = chevette.quilometroPorLitro(10);

console.log(litros);