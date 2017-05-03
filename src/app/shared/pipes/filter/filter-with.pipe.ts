import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWith',
  pure: false
})
export class FilterWithPipe implements PipeTransform {

  public transform(array: any[], filter: any): any {
    const type = typeof filter;

    if (type === 'boolean') {
      return array.filter(this.filterWithBoolean(filter));
    }

    if (type === 'string') {
      if (this.isNumber(filter)) {
        return array.filter(this.filterDefault(filter));
      }

      return array.filter(this.filterWithString(filter));
    }

    if (type === 'object') {
      return array.filter(this.filterWithObject(filter));
    }

    return array.filter(this.filterDefault(filter));
  }

  private filterWithString(filter) {
    filter = filter.toLowerCase();
    return value => {
      return !filter || value.toLowerCase().indexOf(filter) !== -1;
    };
  }

  private filterWithBoolean(filter) {
    return value => {
      return Boolean(value) === filter;
    };
  }

  private filterWithObject(filter) {
    return value => {
      // tslint:disable-next-line:forin
      for (const key in filter) {
        if (!value.hasOwnProperty(key)) {
          return false;
        }

        const type = typeof value[key];
        let isMatching;

        if (type === 'boolean') {
          isMatching = this.filterWithBoolean(filter[key])(value[key]);
        } else if (type === 'string') {
          isMatching = this.filterWithString(filter[key])(value[key]);
        } else if (type === 'object') {
          isMatching = this.filterWithObject(filter[key])(value[key]);
        } else {
          isMatching = this.filterDefault(filter[key])(value[key]);
        }

        if (!isMatching) {
          return false;
        }
      }

      return true;
    };
  }

  private filterDefault(filter) {
    return value => {
      return !filter || filter === value;
    };
  }

  private isNumber(value) {
    return !isNaN(parseInt(value, 10)) && isFinite(value);
  }

}
