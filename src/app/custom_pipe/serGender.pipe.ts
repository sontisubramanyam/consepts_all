import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'gendersetter'})

export class setGenderPipe implements PipeTransform{
    transform(value:string):string{
      if (value == '1') return 'male'
      else return 'female'
    }

}