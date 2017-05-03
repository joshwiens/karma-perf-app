import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompNComponent } from './lm-testcomp-n.component';

describe('Component: LmTestcompNComponent', () => {
  let component: LmTestcompNComponent;
  let fixture: ComponentFixture<LmTestcompNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
