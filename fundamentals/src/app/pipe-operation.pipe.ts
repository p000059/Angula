import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeOperation'
})
export class PipeOperationPipe implements PipeTransform {

  transform(value: number, multiply: number): unknown {
    return value * multiply;
  }

}
