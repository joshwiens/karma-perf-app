import { Pipe, PipeTransform } from '@angular/core';
import {
  isObject,
} from '../../utils/pipe-utils';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(obj: any): any[] {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj);
  }

}
