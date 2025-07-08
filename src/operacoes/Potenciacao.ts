import Calculo from "../Calculo";

export default class Potenciacao extends Calculo {
    public calcular(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    }
}