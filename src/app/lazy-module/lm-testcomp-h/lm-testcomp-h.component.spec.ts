import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompHComponent } from './lm-testcomp-h.component';

describe('Component: LmTestcompHComponent', () => {
  let component: LmTestcompHComponent;
  let fixture: ComponentFixture<LmTestcompHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
