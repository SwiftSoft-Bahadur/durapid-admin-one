import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'togglePipe'
})
export class TogglePipePipe implements PipeTransform {
  value: boolean = false;
  transform(input: boolean): unknown {
      return input == false;
    }
}
