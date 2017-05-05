import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-d',
  template: `
    <div [style.background-color]="bgColor"></div>
  `,
  styleUrls: ['./it-testcomp-d.component.scss']
})
export class ItTestcompDComponent implements OnInit {
  public bgColor = 'red';

  constructor() { }

  ngOnInit() {
  }

}
