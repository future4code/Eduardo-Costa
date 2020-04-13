import { anoBissexto } from "./ex1";

describe("Ano bissexto sim", () => {
  it("Primeiro teste", (ano) => {
    let ano = 2020
    anoBissexto(ano);
  });
});
describe("Ano bissexto nao", () => {
  it("Primeiro teste", (ano) => {
    let ano = 2021
    anoBissexto(ano);
  });
});