import { Pipe, PipeTransform } from '@angular/core';
import {
  isString
} from '../../utils/pipe-utils';

@Pipe({
  name: 'leftPad'
})
export class LeftPadPipe implements PipeTransform {

  transform(str: string, length: number, padCharacter: string = ' '): string {
    if (!isString(str) || str.length >= length) {
      return str;
    }
    while (str.length < length) {
      str = padCharacter + str;
    }
    return str;
  }

}
