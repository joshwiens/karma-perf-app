import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-a',
  template: `
    <p>
      it-testcomp-a Works!
    </p>
  `,
  styleUrls: ['./it-testcomp-a.component.scss']
})
export class ItTestcompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
