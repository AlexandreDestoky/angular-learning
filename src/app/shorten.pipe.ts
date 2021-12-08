import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limite:number): unknown {

    return  `${value.substr(0,limite)} [...]`;
  }

}
