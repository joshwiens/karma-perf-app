import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-it-testcomp-b',
  template: `
    <div class="container" *ngIf="isVisible">Is Visible</div>
    <button (click)="isVisible = !isVisible">Toggle Visibility</button>
  `,
  styleUrls: ['./it-testcomp-b.component.scss']
})
export class ItTestcompBComponent implements OnInit {
  public isVisible = false;

  constructor() { }

  ngOnInit() {
  }

}
