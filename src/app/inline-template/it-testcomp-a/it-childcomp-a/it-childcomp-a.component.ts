import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-it-childcomp-a',
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
export class ItChildcompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
