import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiffPipe } from './pipes/array/diff.pipe';
import { FilterByPipe } from './pipes/array/filter-by.pipe';
import { GroupByPipe } from './pipes/array/group-by.pipe';
import { OrderByPipe } from './pipes/array/order-by.pipe';
import { PluckPipe } from './pipes/array/pluck.pipe';
import { ReversePipe } from './pipes/array/reverse.pipe';

import { FilterWithPipe } from './pipes/filter/filter-with.pipe';

import { SumPipe } from './pipes/math/sum.pipe';
import { MinPipe } from './pipes/math/min.pipe';
import { MaxPipe } from './pipes/math/max.pipe';
import { RoundPipe } from './pipes/math/round.pipe';
import { PercentPipe } from './pipes/math/percent.pipe';

import { ObjectDiffPipe } from './pipes/object/object-diff.pipe';
import { KeysPipe } from './pipes/object/keys.pipe';
import { PairsPipe } from './pipes/object/pairs.pipe';
import { ValuesPipe } from './pipes/object/values.pipe';
import { PickPipe } from './pipes/object/pick.pipe';
import { OmitPipe } from './pipes/object/omit.pipe';

import { LeftPadPipe } from './pipes/string/left-pad.pipe';
import { RightPadPipe } from './pipes/string/right-pad.pipe';
import { RightTrimPipe } from './pipes/string/right-trim.pipe';
import { LeftTrimPipe } from './pipes/string/left-trim.pipe';
import { TrimPipe } from './pipes/string/trim.pipe';
import { MatchPipe } from './pipes/string/match.pipe';
import { ShortenPipe } from './pipes/string/shorten.pipe';
import { ScanPipe } from './pipes/string/scan.pipe';

@NgModule({
  declarations: [
    DiffPipe,
    FilterByPipe,
    GroupByPipe,
    OrderByPipe,
    PluckPipe,
    ReversePipe,
    FilterWithPipe,
    SumPipe,
    MinPipe,
    MaxPipe,
    RoundPipe,
    PercentPipe,
    ObjectDiffPipe,
    KeysPipe,
    PairsPipe,
    ValuesPipe,
    PickPipe,
    OmitPipe,
    LeftPadPipe,
    RightPadPipe,
    RightTrimPipe,
    LeftTrimPipe,
    TrimPipe,
    MatchPipe,
    ShortenPipe,
    ScanPipe
  ],
  imports: [CommonModule],
  exports: [SharedModule],
  providers: []
})
export class SharedModule { }
