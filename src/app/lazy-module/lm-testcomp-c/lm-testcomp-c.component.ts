import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-lm-testcomp-c',
  templateUrl: './lm-testcomp-c.component.html',
  styleUrls: ['./lm-testcomp-c.component.scss']
})
export class LmTestcompCComponent implements OnInit {
  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
