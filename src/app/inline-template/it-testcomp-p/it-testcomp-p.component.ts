import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-p',
  template: `
    <p>
      it-testcomp-p Works!
    </p>
  `,
  styleUrls: ['./it-testcomp-p.component.scss']
})
export class ItTestcompPComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
