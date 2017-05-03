import { Pipe, PipeTransform } from '@angular/core';
import {
  isString
} from '../../utils/pipe-utils';

@Pipe({
  name: 'rightPad'
})
export class RightPadPipe implements PipeTransform {

  transform(str: string, length: number = 1, padCharacter: string = ' '): string {
    if (!isString(str) || str.length >= length) {
      return str;
    }
    while (str.length < length) {
      str = str + padCharacter;
    }
    return str;
  }

}
