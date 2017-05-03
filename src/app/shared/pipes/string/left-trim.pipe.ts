import { Pipe, PipeTransform } from '@angular/core';
import {
  isString
} from '../../utils/pipe-utils';

@Pipe({
  name: 'leftTrim'
})
export class LeftTrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return isString(text)
      ? text.replace(new RegExp(`^[${chars}]+`), '')
      : text;
  }

}
