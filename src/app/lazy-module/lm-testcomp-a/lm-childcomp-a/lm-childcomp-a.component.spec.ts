import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmChildcompAComponent } from './lm-childcomp-a.component';

describe('LmChildcompAComponent', () => {
  let component: LmChildcompAComponent;
  let fixture: ComponentFixture<LmChildcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmChildcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
