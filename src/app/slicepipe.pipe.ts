import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicepipe',
})
export class SlicepipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
