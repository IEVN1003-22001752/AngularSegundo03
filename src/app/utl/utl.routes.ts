import { Routes } from '@angular/router';

export default[

    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component')
    },

    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component')
    },

    {
        // Ruta Corregida: Ahora acepta la matrícula, por ejemplo: /utl/editar/1001
        path:'editar/:matricula', 
        loadComponent:()=>import('./editar/editar.component')
    },

    {
        // Ruta Corregida: Ahora acepta la matrícula, por ejemplo: /utl/eliminar/1001
        path:'eliminar/:matricula', 
        loadComponent:()=>import('./eliminar/eliminar.component')
    }
] as Routes;