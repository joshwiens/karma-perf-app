import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-al-testcomp-c',
  template: `
    <div [ngClass]="{ 'active': isActive, 'inactive': !isActive }"></div>
  `,
  styles: []
})
export class AlTestcompCComponent implements OnInit {
  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
