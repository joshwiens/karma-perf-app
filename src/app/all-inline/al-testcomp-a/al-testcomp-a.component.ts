import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-al-testcomp-a',
  template: `
    <kwp-al-childcomp-a>
        <span title>Test Component Title</span>
        <div body>Test Component Body</div>
    </kwp-al-childcomp-a>
  `,
  styles: []
})
export class AlTestcompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
