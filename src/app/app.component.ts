import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { TemhComponent } from "./tem/temh/temh.component";
import { TempComponent } from "./tem/temp/temp.component";



@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, TemhComponent, TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';

  ngOnInit(): void{
    initFlowbite();
  }
}
