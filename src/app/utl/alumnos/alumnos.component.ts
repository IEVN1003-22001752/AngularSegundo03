import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
import { ProyectoapiService } from '../proyectopi.service';
import { AlumnosUtl } from '../alumnos';

@Component({
  selector: 'app-alumnos',
  imports: [FormsModule, RouterLink, AlumnoFilterPipe, CommonModule],
  templateUrl: './alumnos.component.html',
})
export default class AlumnosComponent{
  imageWidth : number = 50;
  imageMargin : number = 2;
  muestraImagen : boolean = true;
  listFilter: string = '';
  alumnoTitle!: string;
  dataSource:any=[];

  constructor(public  alumnosUTL:ProyectoapiService) { }

  ngOnInit() {
  this.alumnosUTL.getAlumnos().subscribe({
    next: (response) => {
      // 1. Asignamos la respuesta completa (el objeto) a dataSource
      this.dataSource = response; 
      // 2. Opcional: Mostramos el array en consola para verificar (como en tu imagen)
      console.log(this.dataSource.alumnos); 
    },
    error: (err) => console.error('Error al obtener alumnos:', err), // Manejo correcto del error
    complete: () => console.log('Obtención de alumnos completada.')
  });
}

  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'Juan',
      apaterno:'Perez',
      amaterno:'Perez',
      correo:'juanperez@gmail.com'
    },

    {
      matricula:1235,
      nombre:'Pedro',
      apaterno:'Perez',
      amaterno:'Perez',
      correo:'pedroperez@gmail.com'
    },
  ];

  
}
