export class Distancia {
    X1: number = 0;
    X2: number = 0;
    Y1: number = 0;
    Y2: number = 0;
    resultado: number =0;

    calcular() {
        this.resultado = Math.sqrt(Math.pow(this.X2 - this.X1, 2) + Math.pow(this.Y2 - this.Y1, 2))
    }
}