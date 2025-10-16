import { Routes } from '@angular/router';

export default[
    {
        path:'ax-b',
        loadComponent:()=>import('./ax-b/ax-b.component').then(c=>c.AxBComponent)
    },

    {
        path:'distancia',
        loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
    },

    {
        path:'zodiaco',
        loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
    }
] as Routes;
