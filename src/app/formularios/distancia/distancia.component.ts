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

  constructor() { }

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

  calcularDistancia(): void {
    const distanciador = new Distancia(this.formulario);
    this.resultado = distanciador.calcularDistancia();
  }
}