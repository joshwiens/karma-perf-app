import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScChildcompAComponent } from './sc-childcomp-a.component';

describe('ScChildcompAComponent', () => {
  let component: ScChildcompAComponent;
  let fixture: ComponentFixture<ScChildcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScChildcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
