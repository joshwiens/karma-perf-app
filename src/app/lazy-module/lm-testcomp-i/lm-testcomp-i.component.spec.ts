import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompIComponent } from './lm-testcomp-i.component';

describe('Component: LmTestcompIComponent', () => {
  let component: LmTestcompIComponent;
  let fixture: ComponentFixture<LmTestcompIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
