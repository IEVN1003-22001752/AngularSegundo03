import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Multiplicacion } from './clase';



@Component({
  selector: 'app-ax-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ax-b.component.html',
  styleUrl: './ax-b.component.css'
})
export class AxBComponent implements OnInit {

  formulario!: FormGroup;
  resultado!: number;
  objMult = new Multiplicacion;

  constructor() { }

ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        A: new FormControl(''),
        B: new FormControl(''),
      }
    );
  }

  Proceso(): void {
    this.objMult.A = this.formulario.value.A
    this.objMult.B = this.formulario.value.B


    this.objMult.calcular()
    this.resultado = this.objMult.resultado
  }
} {

}
