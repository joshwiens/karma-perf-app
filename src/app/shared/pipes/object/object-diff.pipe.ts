import { Pipe, PipeTransform } from '@angular/core';
import {
  isObject,
  isDeepEqual,
  getKeysTwoObjects,
} from '../../utils/pipe-utils';

@Pipe({
  name: 'objectDiff'
})
export class ObjectDiffPipe implements PipeTransform {

  transform(obj: any, original: any = {}): any {
    if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
      return {};
    }

    return getKeysTwoObjects(obj, original).reduce((diff: any, key: any) => {
      return (!isDeepEqual(original[key], obj[key]) ? diff[key] = obj[key] : {}), diff;
    }, {});
  }

}
