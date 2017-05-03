import { Pipe, PipeTransform } from '@angular/core';
import {
  isString
} from '../../utils/pipe-utils';

@Pipe({
  name: 'match'
})
export class MatchPipe implements PipeTransform {

  transform(text: any, pattern: string, flags?: string): boolean {
    if (!isString(text)) {
      return text;
    }

    return text.match(new RegExp(pattern, flags));
  }

}
