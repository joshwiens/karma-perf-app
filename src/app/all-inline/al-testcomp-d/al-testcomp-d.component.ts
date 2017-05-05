import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-al-testcomp-d',
  template: `
    <div [style.background-color]="bgColor"></div>
  `,
  styles: []
})
export class AlTestcompDComponent implements OnInit {
  public bgColor = 'red';

  constructor() { }

  ngOnInit() {
  }

}
