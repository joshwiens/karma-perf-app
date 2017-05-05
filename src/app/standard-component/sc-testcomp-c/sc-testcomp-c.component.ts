import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kwp-sc-testcomp-c',
  templateUrl: './sc-testcomp-c.component.html',
  styleUrls: ['./sc-testcomp-c.component.scss']
})
export class ScTestcompCComponent implements OnInit {
  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
