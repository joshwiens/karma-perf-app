import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-al-childcomp-a',
  template: `
    <h1>
        <ng-content select="[title]"></ng-content>
    </h1>
    <div class="content">
        <ng-content select="[body]"></ng-content>
    </div>
  `,
  styles: []
})
export class AlChildcompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
