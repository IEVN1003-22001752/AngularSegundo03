import { FormGroup } from '@angular/forms'; 

export class Distancia {

    constructor(public formulario: FormGroup) { }

    calcularDistancia(): number {
        
        const X1 = this.formulario.get('X1')?.value as number;
        const Y1 = this.formulario.get('Y1')?.value as number;
        const X2 = this.formulario.get('X2')?.value as number;
        const Y2 = this.formulario.get('Y2')?.value as number;

        if (X1 === undefined || Y1 === undefined || X2 === undefined || Y2 === undefined) {
             return 0;
        }
        
        return Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2));
    }
}