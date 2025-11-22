import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proyectopi'
})
export class ProyectopiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
