import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-e',
  template: `
    <div>{{ testMessage }}</div>
  `,
  styleUrls: ['./it-testcomp-e.component.scss']
})
export class ItTestcompEComponent implements OnInit {
  @Input() testMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
