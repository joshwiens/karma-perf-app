import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompSComponent } from './lm-testcomp-s.component';

describe('Component: LmTestcompSComponent', () => {
  let component: LmTestcompSComponent;
  let fixture: ComponentFixture<LmTestcompSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
