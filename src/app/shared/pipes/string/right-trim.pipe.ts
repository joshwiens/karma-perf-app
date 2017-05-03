import { Pipe, PipeTransform } from '@angular/core';
import {
  isString
} from '../../utils/pipe-utils';

@Pipe({
  name: 'rightTrim'
})
export class RightTrimPipe implements PipeTransform {

  transform(text: string, chars: string = '\\s'): string {
    return isString(text)
      ? text.replace(new RegExp(`[${chars}]+$`), '')
      : text;
  }

}
