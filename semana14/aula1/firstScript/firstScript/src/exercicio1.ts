export type carro = {
  marca: string,
  capacidadeCombustivel: number,
  posssuiFlex: boolean

};

export const gol: carro = {
  marca: "Volkswagen",
  capacidadeCombustivel: 35,
  posssuiFlex: true
};

export const fusca: carro = {
  marca: "Volkswagen",
  capacidadeCombustivel: 20,
  posssuiFlex: false
};

export const corolla: carro = {
  marca: "Toyota",
  capacidadeCombustivel: 60,
  posssuiFlex: true
};

export const estacionamento: carro[] = [gol, fusca, corolla];
