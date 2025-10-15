import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './clase';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {

  formulario!: FormGroup;
  resultado!: number;
  objMult = new Distancia;

  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        X1: new FormControl(''),
        Y1: new FormControl(''),
        X2: new FormControl(''),
        Y2: new FormControl(''),
      }
    );
  }

  Proceso(): void {
    this.objMult.X1 = this.formulario.value.X1
    this.objMult.X2 = this.formulario.value.X2
    this.objMult.Y1 = this.formulario.value.Y1
    this.objMult.Y2 = this.formulario.value.Y2

    this.objMult.calcular()
    this.resultado = this.objMult.resultado
  }
}