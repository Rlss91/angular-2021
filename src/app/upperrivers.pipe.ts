import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperrivers',
})
export class UpperriversPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log('value', value);
    console.log('args', args);
    value = value.toUpperCase();
    let nvalue = '';
    for (let i = value.length - 1; i >= 0; i--) {
      nvalue += value[i];
    }
    return nvalue;
  }
}
