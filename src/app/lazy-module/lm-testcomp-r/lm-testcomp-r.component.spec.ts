import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompRComponent } from './lm-testcomp-r.component';

describe('Component: LmTestcompRComponent', () => {
  let component: LmTestcompRComponent;
  let fixture: ComponentFixture<LmTestcompRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
