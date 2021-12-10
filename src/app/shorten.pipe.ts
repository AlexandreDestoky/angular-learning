import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limite:number): string {
    return  `${value.substr(0,limite)} [...]`;
  }

}
// ASYNC is very useful to detect change in value async like API CALL