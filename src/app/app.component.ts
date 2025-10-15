import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZodiacoComponent } from "./fomularios/zodiaco/zodiaco.component";
import { DistanciaComponent } from "./fomularios/distancia/distancia.component";
import { AxBComponent } from "./fomularios/ax-b/ax-b.component";

@Component({
  selector: 'app-root',
  imports: [ZodiacoComponent, DistanciaComponent, AxBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
