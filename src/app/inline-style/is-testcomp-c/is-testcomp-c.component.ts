import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-is-testcomp-c',
  templateUrl: './is-testcomp-c.component.html',
  styles: []
})
export class IsTestcompCComponent implements OnInit {
  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
