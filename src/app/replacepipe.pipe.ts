import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacepipe',
})
export class ReplacepipePipe implements PipeTransform {
  transform(value: string, fromtext: string, totext: string): string {
    return value.replace(fromtext, totext);
  }
}
