import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(num: any, total: number = 100, floor: boolean = false): number {
    if (isNaN(num)) {
      return num;
    }

    const percent = num * 100 / total;
    return floor ? Math.floor(percent) : percent;
  }

}
