import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-c',
  template: `
    <div [ngClass]="{ 'active': isActive, 'inactive': !isActive }"></div>
  `,
  styleUrls: ['./it-testcomp-c.component.scss']
})
export class ItTestcompCComponent implements OnInit {
  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
