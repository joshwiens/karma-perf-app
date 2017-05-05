import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-lm-testcomp-e',
  templateUrl: './lm-testcomp-e.component.html',
  styleUrls: ['./lm-testcomp-e.component.scss']
})
export class LmTestcompEComponent implements OnInit {
  @Input() testMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
