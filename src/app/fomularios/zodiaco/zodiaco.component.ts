// zodiaco.component.ts

import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { clase } from './clase';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule, CommonModule], 
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {

  formulario!: FormGroup;
  resultadoSigno: string = '';
  resultadoNombre: string = '';
  resultadoEdad: string = '';
  resultadoImagen: string = ''; 
  objMult = new clase;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        Nombre: new FormControl(''),
        Apaterno: new FormControl(''),
        Amaterno: new FormControl(''),
        Dia: new FormControl(null), 
        Mes: new FormControl(null),
        Año: new FormControl(null),
      }
    );
  }

  Proceso(): void {
    this.objMult.nombre = this.formulario.value.Nombre
    this.objMult.Amaterno = this.formulario.value.Amaterno
    this.objMult.Apaterno = this.formulario.value.Apaterno
    this.objMult.Dia = this.formulario.value.Dia
    this.objMult.Mes = this.formulario.value.Mes
    this.objMult.Año = this.formulario.value.Año

    this.objMult.calcularSigno()
    this.resultadoSigno = 'Tu signo es el ' + this.objMult.resultadoSigno
    this.resultadoImagen = this.objMult.resultadoImagen 

    this.objMult.calcularEdad()
    this.resultadoEdad = 'Tienes ' + this.objMult.resultadoEdad + ' años.'

    this.objMult.calcularNombre()
    this.resultadoNombre = 'Hola ' + this.objMult.resultadoNombre
  }
}