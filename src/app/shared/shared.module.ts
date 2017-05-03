import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffPipe } from './pipes/array/diff.pipe';
import { FilterByPipe } from './pipes/array/filter-by.pipe';
import { GroupByPipe } from './pipes/array/group-by.pipe';
import { OrderByPipe } from './pipes/array/order-by.pipe';
import { PluckPipe } from './pipes/array/pluck.pipe';
import { ReversePipe } from './pipes/array/reverse.pipe';

@NgModule({
  declarations: [
    DiffPipe,
    FilterByPipe,
    GroupByPipe,
    OrderByPipe,
    PluckPipe,
    ReversePipe
  ],
  imports: [CommonModule],
  exports: [SharedModule],
  providers: []
})
export class SharedModule { }
