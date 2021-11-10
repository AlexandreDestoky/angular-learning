import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrev'
})
export class AbbrevPipe implements PipeTransform {

  transform(value:string,fin:number): string {

    return value.slice(0,fin) + ".";
  }

}
