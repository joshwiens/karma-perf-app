import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestcompPComponent } from './lm-testcomp-p.component';

describe('Component: LmTestcompPComponent', () => {
  let component: LmTestcompPComponent;
  let fixture: ComponentFixture<LmTestcompPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestcompPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
