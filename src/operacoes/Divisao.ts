import Calculo from "../Calculo";

export default class Divisao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            return 0;
        }
        return numero1 / numero2;
    }
}