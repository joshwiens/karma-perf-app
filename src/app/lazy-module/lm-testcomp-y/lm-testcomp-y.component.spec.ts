import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompYComponent } from './lm-testcomp-y.component';

describe('Component: LmTestcompYComponent', () => {
  let component: LmTestcompYComponent;
  let fixture: ComponentFixture<LmTestcompYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
