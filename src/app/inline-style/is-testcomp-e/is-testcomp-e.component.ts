import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-is-testcomp-e',
  templateUrl: './is-testcomp-e.component.html',
  styles: []
})
export class IsTestcompEComponent implements OnInit {
  @Input() testMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
