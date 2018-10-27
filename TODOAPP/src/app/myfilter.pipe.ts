import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if (!args) {
     return value;
   } else {
    args = args;
   }

   return value.filter( items => {
     return items.login.startsWith(args) === true;
   });

}
}
