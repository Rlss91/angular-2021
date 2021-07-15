import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacepipe',
})
export class ReplacepipePipe implements PipeTransform {
  transform(value: any, fromtext: any, totext: any): any {
    return value.replace(fromtext, totext);
  }
}
