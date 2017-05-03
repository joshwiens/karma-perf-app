import { Pipe, PipeTransform } from '@angular/core';
import {
  extractDeepPropertyByMapKey,
} from '../../utils/pipe-utils';

@Pipe({
  name: 'pluck'
})
export class PluckPipe implements PipeTransform {

  transform(input: any, map: string): any[] {
    return Array.isArray(input)
      ? input.map(e => extractDeepPropertyByMapKey(e, map))
      : input;
  }

}
