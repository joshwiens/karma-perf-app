import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kwp-al-testcomp-b',
  template: `
    <div class="container" *ngIf="isVisible">Is Visible</div>
    <button (click)="isVisible = !isVisible">Toggle Visibility</button>
  `,
  styles: []
})
export class AlTestcompBComponent implements OnInit {
  public isVisible = false;

  constructor() { }

  ngOnInit() {
  }

}
