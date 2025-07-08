import Calculo from "../Calculo";

export default class Bhaskara extends Calculo {
    public calcular(a: number, b: number, c: number): string {
        if (a === 0) {
            return "Coeficiente 'a' não pode ser zero para uma equação de segundo grau.";
        }

        const delta = (b * b) - 4 * a * c;

        if (delta < 0) {
            return "A equação não possui raízes reais (delta < 0).";
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            if (delta === 0) {
                return `A equação possui uma raiz real: x = ${x1.toFixed(2)}`;
            } else {
                return `As raízes da equação são: x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`;
            }
        }
    }
}
