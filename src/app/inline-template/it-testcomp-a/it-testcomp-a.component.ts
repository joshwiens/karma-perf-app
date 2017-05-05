import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-a',
  template: `
    <kwp-it-childcomp-a>
        <span title>Test Component Title</span>
        <div body>Test Component Body</div>
    </kwp-it-childcomp-a>
  `,
  styleUrls: ['./it-testcomp-a.component.scss']
})
export class ItTestcompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
