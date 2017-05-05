import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-al-testcomp-e',
  template: `
    <div>{{ testMessage }}</div>
  `,
  styles: []
})
export class AlTestcompEComponent implements OnInit {
  @Input() testMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
