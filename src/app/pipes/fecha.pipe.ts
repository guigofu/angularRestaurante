import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    // value.getDate() + '/'
    return value.getDate() + '/' + (value.getMonth() + 1) + '/' + value.getFullYear();
  }

}
